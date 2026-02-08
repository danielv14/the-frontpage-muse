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

Posts are generated via the `/hn-muse` Claude Code skill. One invocation:

1. Scrapes the HN frontpage via the Firebase API
2. AI picks ~10 interesting stories
3. Deep-reads articles and HN comments
4. Creates original creative content (not summaries)
5. Writes a markdown post with frontmatter
6. Branches, commits, pushes, and opens a PR

Run `/hn-muse` to generate a new post. Each post lands in `src/content/posts/YYYY-MM-DD-slug.md`.

## Project Structure

```
src/
  content/posts/     # Generated markdown blog posts (YYYY-MM-DD-slug.md)
  layouts/           # BaseLayout.astro — HTML shell, fonts, theme
  pages/             # Astro pages (index, post listing, individual posts)
  components/        # Astro components (Header, Footer, PostCard, etc.)
  styles/            # global.css — Tailwind 4 theme and custom styles
```

## Conventions

- **Tailwind CSS 4** — CSS-only setup. All theme configuration lives in `src/styles/global.css` via `@import "tailwindcss"` and `@theme` blocks. There is no `tailwind.config.js` file.
- **Explicit variable names** — `storyIds` not `ids`, `commentText` not `text`
- **Content frontmatter** — posts must include `title`, `description`, `date`, and `sources` array with `title`, `url`, and `hn_url` for each source
