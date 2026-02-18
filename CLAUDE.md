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

Posts are generated via the `/hn-muse` Claude Code skill, which uses a two-agent system:

- **Editor** (the skill itself) — spawns the writer, reviews the creative pitch and final draft, handles git operations
- **Writer** (`.claude/agents/hn-writer.md`) — scrapes HN, curates stories, deep-reads articles and comments, proposes a creative direction, writes the draft

One invocation:

1. Editor spawns a writer agent via `TeamCreate`
2. Writer scrapes HN, curates ~10 stories, deep-reads articles and comments
3. Writer sends a creative pitch to the editor
4. Editor reviews for format freshness (no repeating recent formats) and creative interest
5. Writer writes the full draft post
6. Editor reviews against frontmatter and content quality checklists
7. Editor commits and pushes to master

Run `/hn-muse` to generate a new post. Each post lands in `src/content/posts/YYYY-MM-DD-slug.md`.

## Project Structure

```
src/
  content/posts/     # Generated markdown blog posts (YYYY-MM-DD-slug.md)
  layouts/           # BaseLayout.astro — HTML shell, fonts, theme
  pages/             # Astro pages (index, post listing, individual posts)
  components/        # Astro components (Header, Footer, PostCard, etc.)
  styles/            # global.css — Tailwind 4 theme and custom styles
.claude/
  skills/hn-muse/    # Editor skill — orchestrates the pipeline
  agents/hn-writer.md # Writer agent — research and creative writing
```

## Conventions

- **Tailwind CSS 4** — CSS-only setup. All theme configuration lives in `src/styles/global.css` via `@import "tailwindcss"` and `@theme` blocks. There is no `tailwind.config.js` file.
- **Explicit variable names** — `storyIds` not `ids`, `commentText` not `text`
- **Content frontmatter** — posts must include `title`, `description`, `date`, and `sources` array with `title`, `url`, and `hn_url` for each source
