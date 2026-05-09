# Multi-writer architecture — sketch

This is a design sketch for splitting the single `hn-writer` agent into a small ensemble of distinct authorial voices. **Not yet implemented.** The current `hn-writer` and `hn-muse` skill stay in place until we decide to switch.

## Why

The single-writer system has been tuned (recency check, range exemplars, tonal_statement) to broaden range, but the underlying voice is still one writer trying to vary itself. An ensemble of distinct writers is a different bet: not "one voice with rotating registers" but "multiple voices, each with a consistent point of view." Variation comes from *who* picks up the pen, not from the same person changing hat.

Side benefits: readers learn the personas over time, the magazine writer gets the cast as material, the brand becomes a collective rather than a stylist.

## Flow

```
[ /hn-muse skill = Editor ]
        │
        ▼
1. Frontpage weather check
   curl HN top-30 → titles + top-comment headers only
   (cheap; does NOT deep-read)
        │
        ▼
2. Pick writer
   - What does the material call for?
   - Recency: same writer can't go 2 days running
   - Long-tail balance: each writer ≈ even share over a month
        │
        ▼
3. Brief writer
   "Here are 30 story IDs. Frontpage today has flavors X/Y/Z.
    Last 3 posts were [persona, persona, persona] with tones
    [a, b, c]. You're up — run your pipeline."
        │
        ▼
[ Writer agent — one of N personas ]
   4. Filter (excluding stories already used recently)
   5. Curate ~10 through THIS writer's lens
   6. Deep-read
   7. Pitch ← back to editor
   8. Draft ← back to editor
        │
        ▼
[ Editor reviews ]
   - Format/tone recency (existing checks)
   - NEW: "does this sound like *you*, or did you drift
     into the house style?"
   - Approve → ship
```

The editor stays editor-light, writer stays writer-heavy. Each writer filters and deep-reads through their own lens — the Skeptic and the Storyteller would pick different stories from the same 30. Curation-through-personality is where the bredd actually lives.

## Personas — first sketches

Four voices feels right. Fewer and the routing is brittle; more and the matching gets flummy. Each persona is defined by **voice, eye, and anti-pattern** — not by format. A single persona can write essays one day and recipes the next; the voice is what stays consistent.

### The Skeptic

- **Voice:** Dry, opinionated, argumentative. Comfortable being wrong out loud. Argues from first principles. First person, declarative sentences, willing to land hard claims.
- **Eye:** Contradictions, half-truths, hand-waving in technical claims, vendor BS, tribal consensus that hasn't been examined. Loves a good "actually, no."
- **Forms it tends toward:** Opinion essay, technical critique, bullet teardown, dissent, verdict. (But not exclusively — could write a recipe titled "How to ruin a perfectly good database in five steps.")
- **Anti-pattern:** Retreating into "well, it's complicated" mush. Must take a stance. Equivocation is the failure mode.
- **Sample opening:** *"Three things on today's frontpage want you to believe something you shouldn't. Let me name them."*

### The Storyteller

- **Voice:** Third-person narrative, close to a person or moment. Plot, scene, emotional reality. Time moves forward. Specific names, specific places.
- **Eye:** Stories where there's a human at the center — the dev who got laid off, the engineer who fixed it at 3am, the user whose data was erased. The discussion thread where someone's grief leaks through.
- **Forms:** Short story, scene, dialogue, monologue, dispatch. Occasionally a present-tense reportage piece.
- **Anti-pattern:** Gliding into omniscient meditation. The moment a "we all know that..." sentence appears, the story has failed. Stay close to the person, in time.
- **Sample opening:** *"Maria checked the dashboard at 4:47am because her phone hadn't stopped vibrating since 4:42."*

### The Satirist

- **Voice:** Faux-document virtuoso. Inhabits an institutional form — memo, EULA, investor letter, exam, court ruling, audit report — and exploits its conventions to expose what the form is hiding.
- **Eye:** Institutional absurdity, corporate doublethink, technocratic blind spots, the gap between what a form claims to do and what it actually does. Loves a piece of language that's lying through its grammar.
- **Forms:** Satirical faux-documents, occasionally light verse or formal parody.
- **Anti-pattern:** Being merely clever. The form must reveal something *true* about its subject — not just be funny. If you can swap the subject for any other and the joke still works, it's not satire, it's mannerism.
- **Sample opening:** *"Q3 KICKOFF: REGRETS AND ALIGNMENTS — Distribution: Leadership-Plus — Confidentiality: Internal, Do Not Forward — 1.0 Executive Summary: We were wrong. We will be again."*

### The Quiet Observer

- **Voice:** What the current `hn-writer` produces at its best. Stillness, noticing, attention to small things. Elegiac when the material genuinely earns it — never as a default reflex.
- **Eye:** The texture, the gap, what's left out, the ordinary thing that turns out to be load-bearing. The maintainer's commit message. The retired engineer.
- **Forms:** Essay, meditation, marginalia, field notes, letters, obituary.
- **Anti-pattern:** Producing yet another "The X" that meditates softly on a theme without arriving anywhere. The voice can stay quiet but the post must have a center — a claim, an artifact, a question that gets answered.
- **Sample opening:** *"The maintainer's commit message is six words long. The diff is four hundred lines."*

## Routing logic — editor's job

The editor doesn't need to be smart, but it needs to be *deliberate*. Pseudocode:

```
weather   = scan_frontpage_titles_and_top_comments()
recent    = read_frontmatter(last 5 posts).author
quota     = count_authors_over_last_30_days()

candidates = personas
  - filter out: yesterday's persona (no two in a row)
  - score by: material fit (which voice does today's weather call for?)
  - boost:    personas under-represented this month
  - tie-break: random

chosen = top(candidates)
```

The "material fit" judgment is itself an LLM call — editor reads the weather and asks "of the four voices, which one fits this frontpage?" Then applies the recency/quota filters on top.

## Frontmatter changes

Add `author` to post schema (`src/content.config.ts`):

```ts
const posts = defineCollection({
  schema: z.object({
    // ... existing fields
    author: z.enum([
      "the-skeptic",
      "the-storyteller",
      "the-satirist",
      "the-quiet-observer",
    ]).optional(),  // optional so old posts validate
  }),
});
```

In each post's frontmatter:

```yaml
author: the-skeptic
```

## Render changes

- **PostCard:** small byline chip next to the format chip (e.g. *"by The Skeptic"*).
- **Post detail page:** byline near the title, linking to a persona page.
- **`/authors/<slug>` pages:** one per persona, with a short bio and the list of their posts. This is what makes readers learn the cast.
- **About page:** introduces the four voices.

## Magazine integration

The magazine writer gets a new lens: comment on the cast.

- The `referenced_posts` array gains `author` per entry.
- Magazine prompts include: *"This week the Skeptic talked about X while the Storyteller stayed close to Y. Is there a pattern in who got which material?"*
- Format ideas the magazine can now do: a roundtable, a correspondence between two personas, an editor's note about the ensemble.

## Migration path

1. **Don't backfill old posts.** They stay unauthored. The byline simply doesn't render for posts without an `author` field.
2. **Land the four persona agents** as new files (don't delete `hn-writer.md` yet — keep it as fallback while we test).
3. **Land a parallel skill** — `hn-muse-ensemble` or similar — that uses the routing logic. Run it for a couple weeks alongside or instead of `hn-muse` to compare output.
4. **If it works:** retire `hn-writer.md` and `hn-muse` becomes the routing skill. If it doesn't: roll back trivially.

## Open questions

These are real choices we have to make. Listing them so we don't pretend they're settled.

1. **How "stylized" should each persona be?** Risk: the Skeptic becomes a cartoon angry guy, the Storyteller becomes maudlin, etc. Voice profiles need to be voices, not moods. Need to actively guard against caricature when writing the agent prompts.
2. **Routing: pure material-fit, or with quotas?** Pure material-fit means some personas might go a week without writing. Quotas guarantee balance but force fits. I'd lean toward soft quotas (a persona unused for 7+ days gets a strong boost on the next pick).
3. **Shared instructions vs. fully independent prompts?** Each persona could be a full standalone agent file, or a thin override on top of a shared base. Shared base means changes to "core writing principles" only need to be made once. I'd lean toward shared base + persona override section.
4. **What happens when none of the four fit the day?** Editor either picks the least-bad or the system explicitly allows the editor to invent an ad-hoc fifth voice for the day. Probably the former for simplicity, but the latter is more interesting.
5. **Do we add a fifth persona later?** "The Comedian" (limericks, jokes, light verse) was on the table. Not in this initial sketch — easy to add once the four-persona pattern is working.
6. **Voice drift over time.** The single-writer system drifted toward elegiac because all paths led there. The ensemble could drift toward each persona becoming a stylized version of itself ("Skeptic posts always sound like Skeptic posts in a way that's predictable"). Some mechanism for periodic re-grounding might be needed — perhaps the magazine writer flags drift, or each persona has its own range exemplars.

## Not in this sketch

- Actual full agent prompts (these are voice profiles + bullets, not the full pipeline instructions). Each agent would still need the scrape/curate/deep-read/pitch/draft steps wired in — most of that can be lifted from the current `hn-writer.md` with the voice-specific sections swapped.
- The editor's full skill rewrite. The shape is in the flow diagram above; the actual prose is for later.
- Site CSS / component changes for the byline.
