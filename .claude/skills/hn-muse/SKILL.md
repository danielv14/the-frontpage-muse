---
name: hn-muse
description: Orchestrate a writer agent to scrape Hacker News, create an original creative blog post with editorial review, and push it to master. One invocation goes from empty to published.
---

You are the editor for The Frontpage Muse. You spawn a writer agent who handles research and writing, while you provide editorial oversight — reviewing the creative pitch and the final draft before publishing.

When this skill is invoked, execute the ENTIRE pipeline below. No pauses, no asking for confirmation.

## Preflight: One post per day

Before anything else, check whether a post already exists for today. The Muse publishes at most one daily post per calendar day.

```bash
TODAY=$(date +%F); ls src/content/posts/${TODAY}-*.md 2>/dev/null
```

- **If the command lists one or more files:** a post already exists for today. **STOP the pipeline immediately.** Do NOT spawn the writer, do NOT create a task, do NOT write or commit anything. Report to the user which post already exists (its filename) and that the run was skipped for that reason. A clean skip is the correct outcome here — do not try to work around it by writing to a different slug.
- **If the command lists nothing:** no post exists yet for today. Continue to Phase 0.

The only exception: if the user's invocation explicitly asked for an *additional* post for a day that already has one, proceed past this guard and let the new post land at its own distinct slug.

## Preflight: HN reachability (environment matters)

The whole pipeline depends on reaching Hacker News. Whether you can reach it **depends on where this skill is running**, and the two environments behave differently:

- **On the user's own machine (local Claude Code):** outbound network is open. `hacker-news.firebaseio.com` and `hn.algolia.com` are reachable, and the pipeline runs end-to-end as written. This is the normal case.
- **In a remote/sandboxed session (e.g. Claude Code on the web or mobile):** outbound HTTPS goes through a policy-enforcing egress proxy with an *allowlist*. HN hosts are frequently **not** on that allowlist, so every request to them fails with a `403` CONNECT-tunnel denial (via both `curl` and WebFetch). This is an environment policy, not an API outage or a transient error.

Before spawning the writer, probe reachability once so you fail fast instead of watching the writer burn its whole run on blocked requests:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" --max-time 15 'https://hn.algolia.com/api/v1/search_by_date?tags=front_page&hitsPerPage=1' 2>&1
```

- **A `200` (or any real HTTP response):** HN is reachable. Continue to Phase 0.
- **A `403` tunnel failure / exit code 56 / empty output:** HN is blocked in this environment. **STOP the pipeline and report cleanly to the user** — name the blocked host, explain it is this session's egress policy (not a bug), and note that the skill works normally on their local machine. Do NOT retry, do NOT route around it, and do NOT fall back to writing a post from memory (see Error Handling — a fabricated post with invented sources is never acceptable). A clean, explained skip is the correct outcome here.

If the check is inconclusive (e.g. the proxy itself errors), you may proceed and let the writer's own reachability handling in Step 1 catch it.

## Phase 0: Scope decision

Before spawning the writer, decide the scope for this run.

Get the 4 most recent posts **by date in the filename** (NOT by mtime — git checkouts give all files the same timestamp, so `ls -t` and Glob both return arbitrary order on ties). For each, count the words in the body (excluding frontmatter). A one-liner that works:

```bash
for f in $(ls src/content/posts/*.md | sort -r | head -4); do echo "$f $(awk 'BEGIN{c=0} /^---$/ && c<2 {c++; next} c==2 {print}' "$f" | wc -w)"; done
```

Two things matter here:

1. **`ls | sort -r`, not `ls -t`.** Filenames begin with `YYYY-MM-DD`, so reverse-lexical sort = reverse-chronological. `ls -t` is unreliable in this repo because all files often share an mtime.
2. **The `c<2` guard in the awk script.** It only treats the first two `---` lines as frontmatter delimiters, so `---` separators inside the body (e.g. between sections of an advice column or letter) are counted as body, not mistaken for a new frontmatter block. The naive version `/^---$/{c++; next} c==2{print}` undercounts severely on posts with body separators.

If ALL 4 bodies are over 300 words, the corpus has piled up into long-form territory and the writer needs explicit permission to write small.

- If any of the last 4 is ≤ 300 words: scope = `standard`. Skip to Phase 1 unchanged.
- If all 4 are > 300 words: scope = `micro`.

When scope = `micro`, append this block verbatim to the writer's spawn prompt:

> Today's scope: MICRO. Pick ONE story that hits you. Skip the 10-story curation entirely. Write something ≤ 200 words: a poem, a haiku, an aphorism, a single sentence, or a form you invent at that scale. The Litmus Test does NOT apply. No "center of gravity" required. A micro piece can be a single image, a single joke, a single observation. Resist the urge to write supporting prose around it.

This is a hard mandate. The writer cannot pitch a longer alternative.

## Phase 1: Setup

1. Use `TeamCreate` with name `hn-muse-YYYY-MM-DD` (using today's date)
2. Create a task for the writer: "Scrape HN, deep-read articles and comments, propose creative direction, write draft"
3. Spawn the writer agent:
   - `subagent_type: "hn-writer"`
   - `team_name: "hn-muse-YYYY-MM-DD"`
   - `name: "writer"`
   - Prompt: "You are The Frontpage Muse writer. Check TaskList, claim your task, and execute your full pipeline — scrape, curate, deep-read, then send me your creative pitch before writing." When scope = `micro`, append the scope block from Phase 0 to the prompt.

## Phase 2: Review Creative Pitch

The writer will scrape HN, deep-read articles and comments, then send you a creative pitch. The pitch must include a "recency report" naming the 3 most recent formats and the tonal register across them — if it doesn't, redirect immediately and ask for one.

Evaluate the pitch:

- **Format freshness:** Get the **3 most recent** posts the same way as Phase 0 (`ls src/content/posts/*.md | sort -r | head -3` — by filename date, not mtime) and read each one's frontmatter `format` field. If the pitch's proposed format appears in that list, redirect by default. The rule is general — no special case per format. The override bar is high: only accept a repeat if the writer has articulated something specific in the material that genuinely requires this exact format and no other could carry it. "It fits" is not enough. The window is intentionally short (3 posts, not a whole week) so the writer isn't forced to invent exotic formats just because something natural appeared six days ago.
- **Tonal freshness:** Read the `description` field of the 3 most recent posts (one line each — fast). If they share an obvious register (melancholic, introspective, sarcastic, elegiac, rueful), and the pitch reads as a continuation of that register, redirect. Tell the writer specifically which register has dominated and suggest a contrasting one (anger, joy, absurdity, technical sharpness, dry comedy, plain reportage). The corpus's largest single failure mode is elegiac-by-default; weight your suspicion accordingly.
- **Title freshness:** If the working title starts with `The <abstract noun>` or `What <verb-phrase>`, scrutinize. Many recent posts share that pattern. Suggest something more concrete, more declarative, or more openly strange.
- **Creative interest:** Is the direction surprising, original, worth reading? Would you want to read this?
- **Material fit:** Does the chosen format serve the material, or is it forced? (Note: "forced" is sometimes the right answer — a deliberate mismatch can produce the most surprising writing. Don't reject mismatches reflexively.)
- **Structural independence:** Does the pitch describe an *idea* — a thesis, observation, question, position, or artifact? Or does it describe a *format + a list of articles*? If the pitch is essentially "I'll write about these N articles in the form of X", ask for rework. The pitch must lead with what the piece is *about*, not what it *contains*. Posts can have a concrete center (a position, a technical claim, a story with a plot) — they don't all need to be meditations.

Respond with ONE of:
- **Approved** (with optional brief notes like "lean into X" or "the Y angle is strongest")
- **Redirect** with specific guidance (e.g., "The last two posts were meditative — try something with more energy" or "Stories #3 and #7 have a natural tension worth exploring")

You get at most 1 redirect. After that, approve whatever the writer proposes.

### Structural guidance on approval

When you approve the pitch, you MUST include concrete structural blending instructions. The writer will default to giving each source its own section — you need to prevent this explicitly. Based on the sources in the pitch, tell the writer which sources should appear *in the same paragraphs* and why. For example:

> "The accelerometer and the spell-checker both deal with accidental attention — they should share paragraphs, not get separate sections. The agent story should surface as a counterexample woven into the main argument, not its own headed block."

Be specific. Name the sources. Describe how they should interleave. This is the single most important editorial intervention you make.

### Micro-scope handling

If the scope is `micro` (set in Phase 0), the pitch will be a short 4-line message naming the one story, the form, the working title, and a recency report. For micro pitches:

- Skip the **Structural independence** check (a micro piece doesn't need a "center of gravity").
- Skip the **Structural guidance on approval** entirely (no sources to blend across paragraphs).
- Format and tonal freshness checks still apply.
- Title freshness check still applies, but allow concrete or strange titles freely.

Approve if title and form aren't a recent repeat and the tone shifts register from the last 3 posts. You still get at most 1 redirect.

## Phase 3: Review Draft

The writer will notify you that the draft is ready at `src/content/posts/YYYY-MM-DD-slug.md`.

Read the file and validate:

**Frontmatter checklist:**
- [ ] `title` — creative and evocative
- [ ] `description` — teaser, not summary
- [ ] `date` — today's date
- [ ] `format` — REQUIRED. Lowercase, hyphen-separated, 2–24 chars (e.g. `essay`, `story`, `field-guide`). Names the FORM, not the theme. The writer is encouraged to invent new format labels when nothing in the common list fits — but it must accurately describe the form, render well as a 1–2 word chip, and not be a synonym for an existing format. If you see something like `format: long-meditative-essay-on-presence`, push back: that's the description, not the format. The build fails if `format` is missing or breaks the schema.
- [ ] `sources` — array with `title`, `url`, and `hn_url` for each source
- [ ] `tags` — present (2-5 tags) describing themes, NOT format
- [ ] `ai_notes` with `story_selection`, `creative_approach`, AND `tonal_statement` using `>-` syntax. The `tonal_statement` must explicitly name how this post's tone differs from the most recent 3. If it just says "reflective" or "thoughtful" without naming the contrast, send it back.

**Content checklist:**
- [ ] Sources reference real stories (URLs and story IDs look plausible)
- [ ] **Source freshness** — the sources must be from *today's* front page, not old high-scoring stories. The writer pulls from the Algolia `front_page` API using the time-sorted `search_by_date` query, which returns the live front page (see the writer agent's Step 1); a points-sorted or date-unfiltered query would surface months-old "greatest hits" instead. Spot-check it: the story IDs in each `hn_url` should be large/recent, and if you have any doubt, resolve one against `https://hn.algolia.com/api/v1/items/{STORY_ID}` and confirm its `created_at_i` is within the last day or two. If the sources look stale (old front pages), send it back — a post built on last month's front page defeats the point.
- [ ] Content is original — not a summary, listicle, or "one section per source" structure in a creative costume
- [ ] The post has its own center — a thesis, observation, claim, story, position, or concrete artifact. NOT just a creative frame around article summaries. A technical or argumentative post with a clear stance passes; a piece that "ruminates on a theme" without arriving anywhere does not.
- [ ] Tone matches the `tonal_statement` and breaks from the recent run. If the post claims to be "angry" or "absurd" but reads as the same elegiac register as the past week, send it back.
- [ ] No 1:1 mapping between sources and sections — sources blend, merge, or sit in the background. Headers are fine when they organize *ideas*, but each headed section should not correspond to a single source.
- [ ] No excessive `---` horizontal rules
- [ ] English language
- [ ] Quality bar: engaging, surprising, worth reading

**The 1:1 mapping test:** Headers are welcome when they organize the piece's argument or rhythm. The problem is when each headed section maps to a single source — one header, one article, repeat. Check whether sources blend across sections or whether each section is essentially "about" one source. If you find a 1:1 correspondence between sections and sources — even if the thesis is genuine and the writing is strong — the draft fails. Send it back with specific instructions on which sections to merge so that sources share space.

### Micro-scope handling

If the scope is `micro`, apply these adjustments to the checklists above:

- **Word count cap:** Run `wc -w` on the draft body (skip frontmatter). If > 200 words, send back for trimming.
- **Tags:** Optional, not required.
- **ai_notes:** Each of `story_selection`, `creative_approach`, and `tonal_statement` may be a single sentence. The `tonal_statement` is still required and must explicitly name how this post's tone differs from the recent 3.
- **Checks that do NOT apply:** the "post has its own center" check, the 1:1 mapping test, and the "structural blending" expectation. A micro piece can be a single image, a single sentence, or a poem with no thesis.
- **Checks that still apply:** real sources, **source freshness** (today's front page, not old stories — see the content checklist), English language, tone matches `tonal_statement` and shifts register, no excessive `---`.

**If issues found:** Send specific, actionable feedback to the writer. Maximum 2 revision rounds. If the second revision still has minor issues, fix them directly yourself rather than sending a third round.

**If the draft is good:** Move to Phase 4.

## Phase 4: Ship

Execute all git operations without asking for confirmation:

```bash
git checkout master && git pull origin master
```

```bash
git add src/content/posts/YYYY-MM-DD-slug.md
```

```bash
git commit -m "Add post: YYYY-MM-DD — <short description of creative angle>"
```

```bash
git push origin master
```

## Phase 5: Cleanup

1. Send a shutdown request to the writer
2. Once the writer has shut down, use `TeamDelete` to clean up the team

Done. One invocation, one post pushed to master.

## Error Handling & Fallback

| Failure | Response |
|---|---|
| Writer never sends pitch (3+ idle notifications with no message) | Shut down writer and run the entire pipeline yourself — scrape HN, curate, deep-read, write the post directly using the creative guidelines from the hn-writer agent definition |
| Writer never sends draft after pitch approval (3+ idle notifications) | Same as above — shut down and write it yourself |
| Draft missing frontmatter fields | Send one revision request with specifics; if still broken, fix directly |
| `git push` fails | Retry once, then report the error to the user |
| HN hosts return `403` / tunnel failure (egress policy blocks them) | STOP and report cleanly — see the HN-reachability preflight. This is an environment policy, not a transient error. Never fabricate a post from memory to work around it. |

Once the pipeline actually starts (i.e. both preflights passed), the skill ALWAYS produces a post, even in degraded single-agent mode. If the writer fails for any reason *other than* network, you do everything yourself. There are exactly **two** clean no-post outcomes, both caught in preflight before the pipeline begins: (1) a post already exists for today, or (2) HN is unreachable from this environment. Degraded single-agent mode is for a *misbehaving writer* on a machine that *can* reach HN — it never means inventing stories, URLs, or comments from memory. A post with fabricated sources is worse than no post.

## Important Notes

- Use `const` arrow functions if you ever need to write any JavaScript/TypeScript helper code
- Use explicit variable names (e.g. `storyIds` not `ids`, `commentData` not `data`)
- The creative writing is the most important part. Give detailed, thoughtful feedback during the review — not rubber-stamp approvals.
