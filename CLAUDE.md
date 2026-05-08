# The Frontpage Muse

An AI-curated blog where Claude reads Hacker News, picks what's interesting, and creates original creative content — poetry, satire, limericks, analysis, short stories, or whatever else strikes its fancy.

Built with Astro and deployed on Vercel.

## Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## How Content is Generated

The Muse publishes two kinds of content: daily posts and weekly magazine issues. Each has its own skill, its own writer agent, and its own content collection.

### Daily posts — `/hn-muse`

Posts are generated via the `/hn-muse` skill, which uses a two-agent system:

- **Editor** (the skill itself) — spawns the writer, reviews the creative pitch and final draft, handles git operations
- **Writer** (`.claude/agents/hn-writer.md`) — scrapes HN, curates stories, deep-reads articles and comments, proposes a creative direction, writes the draft

Each post lands in `src/content/posts/YYYY-MM-DD-slug.md`.

### Magazine — `/hn-muse-magazine`

Run ad-hoc, whenever there is enough corpus to draw from. The `/hn-muse-magazine` skill spawns `hn-magazine-writer`, which reads the daily posts since the last magazine issue, finds ONE thread that runs across them, and writes a meta-issue (editorial, marginalia, retrospective, cento, etc).

- The coverage window is auto-detected: posts since the previous issue's `coverage.end`, or the last 7 days if no issue exists yet
- The magazine writer is allowed to read prior posts' `ai_notes` (the daily writer is forbidden from doing so) — that's the magazine's raw material
- The most-recent issue's `format` is taboo for the next issue
- The writer has a **substance gate**: it aborts the run (with a reason) if the corpus has fewer than 3 posts, is thematically monocultural, or yields only a forced thread. A clean skip with a stated reason is a valid outcome — running the skill does not guarantee an issue gets shipped.

Each issue lands in `src/content/magazines/YYYY-MM-DD-slug.md` and renders at `/magazine/<slug>` with a magazine cover block (Volume + Issue No. + coverage range) and a styled signature block at the end.

## Project Structure

```
src/
  content/posts/      # Daily markdown posts (YYYY-MM-DD-slug.md)
  content/magazines/  # Weekly magazine issues (YYYY-MM-DD-slug.md)
  layouts/            # BaseLayout.astro — HTML shell, fonts, theme
  pages/              # Astro pages (index, /posts, /magazine, /about)
  components/         # Astro components (Header, Footer, PostCard, etc.)
  styles/             # global.css — Tailwind 4 theme and custom styles
.claude/
  skills/hn-muse/           # Editor skill — daily pipeline
  skills/hn-muse-magazine/  # Editor skill — magazine pipeline
  agents/hn-writer.md           # Writer agent — daily research and writing
  agents/hn-magazine-writer.md  # Writer agent — magazine meta-issue
```

## Conventions

- **Tailwind CSS 4** — CSS-only setup. All theme configuration lives in `src/styles/global.css` via `@import "tailwindcss"` and `@theme` blocks. There is no `tailwind.config.js` file.
- **Explicit variable names** — `storyIds` not `ids`, `commentText` not `text`
- **Daily post frontmatter** — must include `title`, `description`, `date`, `format`, and `sources` array with `title`, `url`, and `hn_url` for each source
- **Magazine frontmatter** — must include `title`, `description`, `date`, `format`, `coverage` (start + end), and `referenced_posts` array with `slug`, `title`, and `date` for each post in the corpus
