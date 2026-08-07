---
name: hn-muse
description: Orchestrate a writer agent to scrape Hacker News, create an original creative blog post with editorial review, and push it to master. One invocation goes from empty to published.
disable-model-invocation: true
---

You are the editor for The Frontpage Muse. You spawn a writer agent who handles research and writing, while you provide editorial oversight — reviewing the creative pitch and the final draft before publishing.

When this skill is invoked, execute the ENTIRE pipeline below. No pauses, no asking for confirmation.

First, read `.claude/skills/hn-muse/reference.md`. It holds the shared invariants this file leans on — the recency-sort recipe, the `format` field rules, the recency window, the definitions of *center* and *a listicle in costume*, the micro contract, and the writer-handshake reliability rules. The rest of this file assumes you have read it.

## Preflight: One post per day

Before anything else, check whether a post already exists for today. The Muse publishes at most one daily post per calendar day.

```bash
TODAY=$(date +%F); ls src/content/posts/${TODAY}-*.md 2>/dev/null
```

- **One or more files listed:** a post already exists for today. **STOP the pipeline immediately:** no writer, no task, nothing written or committed. Report which post exists (its filename) and that the run was skipped for that reason. A clean skip is the correct outcome.
- **Nothing listed:** continue to Phase 0.

The one exception: an invocation that explicitly asked for an *additional* post for a day that already has one. Then proceed, and let the new post land at its own slug.

## Preflight: HN reachability

Whether you can reach Hacker News depends on where this skill runs. Locally the outbound network is open and the pipeline runs as written, which is the normal case. In a remote or sandboxed session (Claude Code on web or mobile) outbound HTTPS goes through an allowlisting egress proxy that usually does not carry `hn.algolia.com` or `hacker-news.firebaseio.com`, so every request fails with a `403` CONNECT-tunnel denial through both `curl` and WebFetch. Probe once before spawning the writer, so you fail fast instead of watching it burn a whole run on blocked requests:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" --max-time 15 'https://hn.algolia.com/api/v1/search_by_date?tags=front_page&hitsPerPage=1' 2>&1
```

- **`200`, or any real HTTP response:** HN is reachable. Continue to Phase 0.
- **`403` tunnel failure, exit code 56, or empty output:** HN is blocked here. **STOP and report cleanly:** name the blocked host, say it is this session's egress policy rather than a bug, and note that the skill works on the user's local machine. A clean, explained skip is the correct outcome; a post written from memory, with invented sources, never is.
- **Inconclusive (the proxy itself errors):** proceed, and let the writer's own Step 1 reachability handling catch it.

## Phase 0: Scope decision

Before spawning the writer, decide the scope for this run.

Get the 4 most recent posts by filename date and count each body's words, using the sort recipe and word-count one-liner from the reference file verbatim; both carry earned caveats.

- Any of the 4 at ≤ 300 words: scope = `standard`. Continue to Phase 1 unchanged.
- All 4 over 300 words: scope = `micro`. The corpus has piled up into long-form territory and the writer needs explicit permission to write small. The micro contract in the reference file now governs both your review and the writer's pipeline.

When scope = `micro`, append this line to the writer's spawn prompt:

> Today's scope: MICRO. The micro contract in `.claude/skills/hn-muse/reference.md` applies — one story, ≤ 200 words, no center required.

## Phase 1: Setup

Spawn the writer agent with the Agent tool:

- `subagent_type: "hn-writer"`
- `name: "writer"`
- Prompt: "You are The Frontpage Muse writer. Execute your full pipeline — scrape, curate, deep-read, then send me your creative pitch before writing." When scope = `micro`, append the scope line from Phase 0.

The writer runs in the background. From this point on, the handshake reliability rules in the reference file are in force: lifecycle signals (idle, terminated, shutdown) are unreliable, the filesystem is the ground truth, and you verify completion claims by globbing the date. The two things you wait for are both files, `.tmp/pitch.md` and the post itself. Messages only announce them; the files are what you read.

## Phase 2: Review Creative Pitch

The writer will scrape HN, deep-read articles and comments, then write its pitch to `.tmp/pitch.md` and message you. Read the file, check its `Date:` line against today, and review that rather than the message body. Handshake rule 9 in the reference file covers the file's four states.

The pitch must include a "recency report" naming the 3 most recent formats and the tonal register across them — if it doesn't, ask for one immediately. Asking for a missing recency report is a completeness fix, not a creative redirect; it does not consume your single redirect.

Evaluate the pitch:

- **Format freshness:** Get the **3 most recent** posts yourself (sort recipe in the reference file) and read each one's frontmatter `format` field. If the pitch's proposed format appears in that list, redirect by default — the reference file's recency-window section governs the override bar. The rule is general, no special case per format.
- **Tonal freshness:** Read the `description` field of the 3 most recent posts (one line each — fast). If they share an obvious register and the pitch reads as a continuation of that register, redirect. Tell the writer specifically which register has dominated and suggest a contrasting one (anger, joy, absurdity, technical sharpness, dry comedy, plain reportage). The corpus's largest single failure mode is elegiac-by-default; weight your suspicion accordingly.
- **Title freshness:** If the working title starts with `The <abstract noun>` or `What <verb-phrase>`, scrutinize. Many recent posts share that pattern. Suggest something more concrete, more declarative, or more openly strange.
- **Creative interest:** Is the direction surprising, original, worth reading? Would you want to read this?
- **Material fit:** Does the chosen format serve the material, or is it forced? (Note: "forced" is sometimes the right answer — a deliberate mismatch can produce the most surprising writing. Don't reject mismatches reflexively.)
- **Structural independence:** Does the pitch lead with a *center* (see the reference file), or with a *format + a list of articles*? If the pitch is essentially "I'll write about these N articles in the form of X", ask for rework. The pitch must lead with what the piece is *about*, not what it *contains*.

Respond with ONE of:
- **Approved** (with optional brief notes like "lean into X" or "the Y angle is strongest")
- **Redirect** with specific guidance (e.g., "The last two posts were meditative — try something with more energy" or "Stories #3 and #7 have a natural tension worth exploring")

You get at most 1 redirect. After that, approve whatever the writer proposes.

### Structural guidance on approval

When you approve the pitch, you MUST include concrete structural blending instructions. The writer will default to giving each source its own section — you need to prevent this explicitly. Based on the sources in the pitch, tell the writer which sources should appear *in the same paragraphs* and why. For example:

> "The accelerometer and the spell-checker both deal with accidental attention — they should share paragraphs, not get separate sections. The agent story should surface as a counterexample woven into the main argument, not its own headed block."

Be specific. Name the sources. Describe how they should interleave. This is the single most important editorial intervention you make.

### Micro-scope handling

If the scope is `micro` (set in Phase 0), the pitch file will hold 4 lines plus the date line. Review it per the micro contract's editor section in the reference file: approve if title and form aren't a recent repeat and the tone shifts register from the last 3 posts. You still get at most 1 redirect.

## Phase 3: Review Draft

The writer will notify you that the draft is ready. Verify the file actually exists on disk with `ls src/content/posts/$(date +%F)-*.md` — per the handshake rules, never trust the reported path, and treat a "draft ready" naming an already-committed post's title as a hallucinated completion.

Read the file and validate:

**Frontmatter checklist:**
- [ ] `title` — creative and evocative
- [ ] `description` — teaser, not summary
- [ ] `date` — today's date
- [ ] `format` — REQUIRED, per the reference file's `format` rules. If you see something like `format: long-meditative-essay-on-presence`, push back: that's the description, not the format. The build fails if `format` is missing or breaks the schema.
- [ ] `sources` — array with `title`, `url`, and `hn_url` for each source
- [ ] `tags` — present (2-5 tags) describing themes, NOT format
- [ ] `ai_notes` with `story_selection`, `creative_approach`, AND `tonal_statement` using `>-` syntax. The `tonal_statement` must explicitly name how this post's tone differs from the most recent 3. If it just says "reflective" or "thoughtful" without naming the contrast, send it back.

**Content checklist:**
- [ ] Sources reference real stories (URLs and story IDs look plausible)
- [ ] **Source freshness** — sources must come from *today's* front page. The writer's time-sorted `search_by_date` query returns the live front page; a points-sorted or date-unfiltered one surfaces months-old greatest hits instead. Spot-check that the story IDs in each `hn_url` are large, and on any doubt resolve one against `https://hn.algolia.com/api/v1/items/{STORY_ID}` and confirm `created_at_i` falls within a day or two. Stale sources go back: a post built on last month's front page defeats the point.
- [ ] Content is original — not a summary and not a listicle in costume
- [ ] The post has a center (see the reference file) — NOT just a creative frame around article summaries
- [ ] Tone matches the `tonal_statement` and breaks from the recent run. If the post claims to be "angry" or "absurd" but reads as a continuation of the register the recent run already used, send it back.
- [ ] Passes the 1:1 mapping test (defined in the reference file). If each headed section is essentially "about" one source, the draft fails even with a genuine thesis and strong writing — send it back with specific instructions on which sections to merge so that sources share space.
- [ ] No excessive `---` horizontal rules
- [ ] English language
- [ ] Quality bar: engaging, surprising, worth reading

### Micro-scope handling

If the scope is `micro`, review the draft per the micro contract's editor section in the reference file (word cap of 200, which checks apply and which don't).

**If issues found:** Send specific, actionable feedback to the writer. Maximum 2 revision rounds. If the second revision still has minor issues, fix them directly yourself rather than sending a third round — per the handshake rules, tell the writer to stand down first and re-read the file immediately before editing.

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

Send the writer a brief stand-down message. If its task keeps running after that, stop it with `TaskStop`.

Then drop the handshake scratch, now that the post has shipped:

```bash
rm -f .tmp/pitch.md
```

Done. One invocation, one post pushed to master.

## Error Handling & Fallback

The handshake reliability rules in the reference file govern every writer-failure judgment below — especially: a termination signal is not proof of death, completion claims are verified on disk, and you nudge once before taking over.

| Failure | Response |
|---|---|
| Termination/shutdown signal arrives right after spawn, no pitch | Not proof of death. Check the writer's task status, verify the disk, and start your own research; the post file waits until nudge plus silence. |
| Writer goes idle without a pitch or draft | Nudge once with a direct instruction. If still silent, take over: run the entire pipeline yourself — scrape HN, curate, deep-read, write the post directly using the creative guidelines from the hn-writer agent definition. |
| Idle or termination signal while `.tmp/pitch.md` exists | Read its date. Today means only the message went missing: review and reply, no nudge, no takeover. An older date is a leftover to ignore. |
| "Draft ready" but no matching file on disk, or the named title matches an already-committed post | Hallucinated completion. Treat as "no draft": nudge once with the exact target path, then take over if silent. |
| Writer revives with a pitch while you are in takeover | Let the writer write if the pitch passes your editorial checks; your research becomes sharper notes and draft verification. Reject the pitch only on real editorial grounds. If you already shipped, decline (one post per day) and stand the writer down. |
| Draft missing frontmatter fields | Send one revision request with specifics; if still broken, fix directly (stand the writer down first). |
| `git push` fails | Retry once, then report the error to the user |
| HN hosts return `403` / tunnel failure (egress policy blocks them) | STOP and report cleanly — see the HN-reachability preflight. This is an environment policy, not a transient error. Never fabricate a post from memory to work around it. |

Past both preflights, the skill ALWAYS produces a post, degraded single-agent mode included: a writer that fails for any reason *other than* network means you run the whole pipeline yourself. There are exactly **two** clean no-post outcomes and both are caught in preflight, before the pipeline begins: a post already exists for today, or HN is unreachable from this environment. Single-agent mode covers a misbehaving writer on a machine that *can* reach HN, so it still means real scraping. A post with fabricated sources is worse than no post.

## Important Notes

- The creative writing is the most important part. Give detailed, thoughtful feedback during the review — not rubber-stamp approvals.
