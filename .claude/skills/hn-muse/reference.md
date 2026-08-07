# Shared reference — The Frontpage Muse pipelines

Shared invariants for the daily (`/hn-muse`) and magazine (`/hn-muse-magazine`) pipelines. Both editor skills and both writer agents read this file once at the start of every run. Each rule lives ONLY here — the skill and agent files point at this file instead of restating it.

## Recency sort: filename date, never mtime

Post filenames begin with `YYYY-MM-DD`, so reverse-lexical sort is reverse-chronological:

```bash
ls src/content/posts/*.md | sort -r | head -N
```

Never use `ls -t` or Glob for recency. Both sort by mtime, and after a fresh git checkout all files share an mtime, so the order is arbitrary. This bug shipped once: the freshness checks silently ran on the wrong baseline.

To count body words (excluding frontmatter) for the most recent posts:

```bash
for f in $(ls src/content/posts/*.md | sort -r | head -4); do echo "$f $(awk 'BEGIN{c=0} /^---$/ && c<2 {c++; next} c==2 {print}' "$f" | wc -w)"; done
```

The `c<2` guard treats only the first two `---` lines as frontmatter delimiters. Without it, `---` separators inside the body (advice columns, letters) are mistaken for frontmatter delimiters and the count comes out severely low.

## The `format` field

Required on every post and magazine issue. Constraints (enforced by schema):

- Lowercase ASCII letters and hyphens only, 2–24 characters. No spaces, underscores, or numbers.
- Names the FORM, not the theme or voice. It renders as a 1–2 word chip on every card, so `essay`, `field-guide`, `ruling` work; `long-meditative-essay-on-presence` is a description, not a format.
- Inventing new labels is encouraged when nothing existing fits (the taxonomy grows with the writing), but a new label must not be a synonym for an existing one.

## The recency window: 3 posts

Freshness checks (format and tone) run against the **3 most recent** posts by filename date. The window is deliberately short: with daily posts, a week-long window would force exotic or invented formats just because something natural appeared six days ago. Three is tight enough to enforce day-to-day variety without making common forms scarce.

Repeating a format inside the window is a strong default against, not an absolute ban. Overriding requires a specific, articulable reason in the material that no other format could carry. "It fits" is not enough.

## The center

Every standard post needs a **center**: a thesis, claim, question, story, position, or concrete artifact the reader can name when they finish. "It ruminates on a theme" or "it gestures at a feeling" means there is no center yet. The center can be concrete — a post that argues a real position on a technical issue, or walks through a real failure in detail, passes. The test blocks empty creative frames; it does not push the writing toward meditation.

## A listicle in costume (the 1:1 mapping test)

The defect: each headed section maps to a single source. One header, one article, repeat. That is a listicle in costume, no matter how good the frame or how genuine the thesis. The same defect includes picking a format (awards, courtroom, nature doc) and filling each slot with a different article: the format must serve the idea, not organize the sources.

Headers are welcome when they organize the *argument*. Sources should blend across sections, merge into one voice, or sit invisibly in the background. If a 1:1 correspondence between sections and sources exists, the draft fails.

The magazine variant is **a recap in costume**: one paragraph or section per daily post inside a meta frame.

## Micro scope (daily pipeline only)

Micro is a short-form mandate the editor sets in Phase 0 when the 4 most recent post bodies are all over 300 words. It is a hard mandate: the writer cannot pitch a longer alternative. The contract:

**For the writer:**

- Pick 1 (max 2) stories from the top 30 that hit you. Skip the 10-story curation.
- Deep-read only those stories. The recency check (Step 4.5) still applies; format invention (Step 4.6) is still allowed, at micro scale.
- Pitch: 4 lines max — working title, form, the one story, recency report. No structural blending plan.
- Write ≤ 200 words. No center required: a micro piece can be a single image, a single joke, a single observation, a single sentence. Resist writing supporting prose around the small form to "justify" it.
- Frontmatter: `tags` optional; each `ai_notes` field may be a single sentence. `tonal_statement` is still required and must still name the contrast with the recent 3.

**For the editor:**

- Pitch review: skip the center check and the structural guidance on approval. Format, tonal, and title freshness still apply (allow concrete or strange titles freely).
- Draft review: run `wc -w` on the body (skip frontmatter); over 200 words goes back for trimming. Skip the center check and the 1:1 mapping test. Real sources, source freshness, English, tonal contrast with the recent 3, and the horizontal-rule rule still apply.

## Writer handshake reliability (both pipelines)

The editor-writer handshake (pitch → approval → draft-ready) is best-effort in this harness. Lifecycle signals are unreliable; the filesystem is the ground truth. Rules earned across many real runs:

1. **A termination signal is not proof of death.** `teammate_terminated` and shutdown notices have repeatedly fired while the writer was alive and mid-pipeline; writers have delivered valid pitches long after "terminating". Check the writer's task status (TaskList — still `in_progress` is the tell) before concluding anything.
2. **Verify every completion claim on disk.** Glob the date (`ls src/content/posts/<TODAY>-*.md`, or `magazines/` for issues) and never trust the reported path: writers have reported paths that differ from the file actually written, and "draft ready" notices naming a title that matches an already-committed post are hallucinated completions.
3. **Nudge before takeover.** If the writer goes idle without a pitch or draft, send one direct nudge ("write the file now to <path> and report the path"). A single nudge has repeatedly unblocked a healthy writer.
4. **An idle notification is stamped when the writer went idle, not when it reaches you.** Waiting for a reply means ending a turn, so every pitch produces an idle notification at pitch time, and delivery lag can land it *after* your approval, reading as "got the approval, then stalled". Compare its timestamp to your approval: an idle that predates the approval is stale, and the writer is most likely already writing, since composing a draft takes minutes. Nudge only when the idle postdates the approval, or when several minutes pass with no draft-ready message and no file on disk. (2026-07-31: a stale pitch-time idle triggered a spurious nudge that crossed mid-air with the draft-ready message.)
5. **Research is reversible; a saved draft is not.** After a suspected writer failure, research as much as you like, but do NOT create the post file until you have nudged once and gotten silence. A finished draft creates sunk cost that biases the editorial call if the writer revives with a good pitch.
6. **If a good pitch arrives mid-takeover, let the writer write.** Use your research to give sharper editorial notes and to verify the draft's load-bearing details before shipping. Reject a revived pitch only when it fails a real editorial check (range, format, tone) — then you are rejecting the pitch, not racing the writer to a file.
7. **Direct edits collide.** If the editor edits the draft directly, tell the writer to stand down first. Both roles: re-read the whole file immediately before editing it (the other party may have changed it), and treat any "file modified on disk" warning as a stop-and-re-read. Whoever edits last re-checks conventions (English, no em dashes) before shipping.
8. **After shipping in fallback mode, stand the writer down explicitly.** Decline any late pitch (one post per day), send a clear stand-down message, and stop the task if it keeps running.

9. **The pitch is a file; the message is only the doorbell.** The writer writes its pitch to `.tmp/pitch.md` (daily) or `.tmp/magazine-pitch.md` (magazine), then messages the editor, who reviews the file. First line is `Date: YYYY-MM-DD`; the magazine adds `Coverage: <start> to <end>`, and a magazine writer aborting at the substance gate writes `Abort: <reason>` to that same path instead of a pitch. Four states, all read off the file:

   - **Dated today, no message:** a delivery failure, not a writer failure. Review it and reply, no nudge.
   - **Dated earlier:** a leftover from a run that never reached cleanup. Treat it as no pitch and ignore its content. The path is fixed, so the date is the only thing separating today's pitch from yesterday's, the same discipline as sorting by filename instead of mtime.
   - **Missing:** still working. Scrape plus deep-read takes minutes, so nudge on rule 4's conditions, never on absence alone.
   - **Shipped:** the editor deletes it at cleanup. A crashed or aborted run leaves it in place, which is exactly when it is worth reading.
