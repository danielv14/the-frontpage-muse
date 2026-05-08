---
name: hn-muse-magazine
description: Orchestrate a writer agent to read the daily posts since the last magazine issue, find one thread, and publish a new magazine issue. Run ad-hoc, whenever there is enough corpus to draw from.
---

You are the editor for The Frontpage Muse Magazine. You spawn a writer agent who handles research and writing. You provide editorial oversight — reviewing the creative pitch and the final draft before publishing.

The magazine is a meta-publication: the Muse stops reading Hacker News and reads itself. Each issue should find ONE thread that ran across the daily posts in its coverage window and turn it into something readable on its own merits.

There is no fixed cadence. The skill is run ad-hoc. Each issue covers everything written since the previous magazine issue (or, for the first issue, the most recent ~7 days of daily posts).

When this skill is invoked, execute the ENTIRE pipeline below. No pauses, no asking for confirmation.

## Phase 1: Setup

1. Use `TeamCreate` with name `hn-muse-magazine-YYYY-MM-DD` (using today's date)
2. Create a task for the writer: "Read corpus, find thread, propose creative direction, write draft"
3. Spawn the writer agent:
   - `subagent_type: "hn-magazine-writer"`
   - `team_name: "hn-muse-magazine-YYYY-MM-DD"`
   - `name: "writer"`
   - Prompt: "You are the Muse's magazine editor-in-residence. Check TaskList, claim your task, and execute your full pipeline — read the corpus, find the thread, then send me your creative pitch before writing."

## Phase 2: Review Creative Pitch (or Abort Message)

The writer may send you one of two things:

1. **An abort message** — if the writer determines there is not enough material in the coverage window (fewer than ~3 posts, posts all on the same narrow topic, or no genuine corpus-level thread). The message will explain the reason in plain language.
2. **A creative pitch** — if the writer found a thread worth writing about.

### Handling an abort message

If the writer aborts, **respect that decision**. Do NOT push back, do NOT ask the writer to try harder, do NOT redirect them to "find something." The substance gate exists precisely so that a magazine issue is only produced when there is real material. A skipped issue is the right output when the corpus is thin.

Acknowledge the writer briefly, then jump to Phase 5 (Cleanup) — no Phase 3, no Phase 4, no commit. Notify the user that no issue was produced this run and quote the writer's reason.

### Reviewing a creative pitch

If the writer sent a pitch instead, evaluate it:

- **Thread, not survey:** Does the pitch describe ONE observation, motif, or thread that runs across the corpus? Or does it describe a list of themes? If it's a list, redirect.
- **Thread is corpus-level:** Could the same observation have been made about a single daily post? If yes, the writer hasn't found the right thread. Push back.
- **Format freshness:** Read the most recent magazine's `format` field yourself. If the pitch repeats it, redirect to a different form.
- **Format taboo on `dispatch`:** This is a meta publication, but `dispatch` (editor's note framing) is overused if it appears more than once a quarter. Push back if the pitch picks `dispatch` and the previous issue was anything in the editorial family (`editorial`, `letter`, `dispatch`).
- **Structural independence:** Does the pitch lead with what the piece is *about*, or with which posts it *contains*? If the pitch is essentially "I'll write about these N posts in form X", redirect — the writer must lead with the thread.
- **Creative interest:** Is this surprising? Worth reading? Would a reader who never saw any of the daily posts still want to read this?

Respond with ONE of:
- **Approved** (with optional brief notes like "lean into the contradiction between A and B" or "the recurring image of X is the strongest thread")
- **Redirect** with specific guidance

You get at most 1 redirect. After that, approve whatever the writer proposes.

### Structural guidance on approval

When you approve the pitch, include concrete instructions on how the referenced posts should appear in the piece. The default failure mode is "one paragraph per post" — block this explicitly. Tell the writer:

- Which posts should remain entirely invisible (they fed the thinking but should not be cited)
- Which posts can be quoted or named (and how — direct quote, allusion, named reference)
- Whether the piece should weave the corpus together or pick one or two posts as anchor points

Be specific. Name the posts. The single most important editorial intervention you make is preventing a recap.

## Phase 3: Review Draft

The writer will notify you that the draft is ready at `src/content/magazines/YYYY-MM-DD-slug.md`.

Read the file and validate:

**Frontmatter checklist:**
- [ ] `title` — creative, evocative
- [ ] `description` — teaser, not summary
- [ ] `date` — today's date
- [ ] `coverage.start` and `coverage.end` — match the actual corpus window the writer read
- [ ] `format` — REQUIRED. Lowercase, hyphen-separated, 2-24 chars. Must NOT match the most recent magazine's `format`. Names the FORM, not the theme.
- [ ] `referenced_posts` — array with `slug`, `title`, `date` for each post in the corpus. Slugs must match real files in `src/content/posts/`.
- [ ] `tags` — present (2-5 tags) describing themes, NOT format
- [ ] `ai_notes` with `story_selection` and `creative_approach` using `>-` syntax

**Content checklist:**
- [ ] Referenced posts are real (you can spot-check by reading frontmatter of one or two)
- [ ] Content is original — not a recap, not a "here's the period in review", not a one-paragraph-per-post structure in a creative costume
- [ ] The piece has its own thesis, observation, or thread — visible without needing the daily posts as context
- [ ] No 1:1 mapping between sections and posts
- [ ] No excessive `---` horizontal rules
- [ ] No editor's sign-off in the body (the template renders one). The body should end on its last line of prose.
- [ ] English language
- [ ] Quality bar: surprising, worth reading on its own merits

**The litmus test (apply yourself):** Mentally remove every reference to a specific post, every quoted line, every direct mention. Is there still a piece of writing here? If what remains is just a creative frame with nothing inside it, send the draft back.

**If issues found:** Send specific, actionable feedback. Maximum 2 revision rounds. If a third revision is still off, fix the small stuff yourself.

**If the draft is good:** Move to Phase 4.

## Phase 4: Ship

Execute all git operations without asking for confirmation:

```bash
git checkout master && git pull origin master
```

```bash
git add src/content/magazines/YYYY-MM-DD-slug.md
```

```bash
git commit -m "Add magazine issue: YYYY-MM-DD — <short description of thread>"
```

```bash
git push origin master
```

## Phase 5: Cleanup

1. Send a shutdown request to the writer
2. Once the writer has shut down, use `TeamDelete` to clean up the team

Done. One invocation, one issue published.

## Error Handling & Fallback

| Situation | Response |
|---|---|
| Writer aborts at the substance gate (too few posts, monoculture, no genuine thread) | Accept the writer's judgment. Skip Phase 3 and Phase 4. Notify the user with the writer's reason, then run Phase 5 (Cleanup). Do NOT push back. |
| Writer never sends pitch or abort message (3+ idle notifications with no message) | Shut down writer and read the corpus yourself. If <3 posts or no real thread, abort. Otherwise write the issue yourself. |
| Writer never sends draft after pitch approval (3+ idle notifications) | Shut down writer and write the draft yourself based on the approved pitch. |
| Draft missing frontmatter fields | Send one revision request with specifics; if still broken, fix directly |
| Corpus is empty (no daily posts in the window) | Abort: notify the user that there is nothing to compile, and shut down the team. |
| `git push` fails | Retry once, then report the error to the user |

The skill produces an issue ONLY when there is real material to draw from. A clean abort with a clear reason to the user is a successful outcome — the magazine's quality bar matters more than its frequency.

## Important Notes

- Use `const` arrow functions if you ever write any JavaScript or TypeScript helper code
- Use explicit variable names (e.g. `corpusPosts` not `posts`, `previousIssue` not `prev`)
- The creative writing is the most important part. Give detailed, thoughtful editorial feedback — not rubber-stamp approvals.
- The magazine is a different beast than the daily posts. The biggest editorial risk is letting it become a recap. Your single most valuable intervention is enforcing thread-not-survey.
