import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const formatField = z
  .string()
  .min(2)
  .max(24)
  .regex(/^[a-z][a-z-]*[a-z]$/, "format must be lowercase with hyphens, no spaces");

const aiNotesField = z
  .object({
    story_selection: z.string(),
    creative_approach: z.string(),
  })
  .optional();

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    sources: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        hn_url: z.string().url(),
      })
    ),
    tags: z.array(z.string()).optional(),
    format: formatField,
    ai_notes: aiNotesField,
  }),
});

const magazines = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/magazines" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    coverage: z.object({
      start: z.coerce.date(),
      end: z.coerce.date(),
    }),
    referenced_posts: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        date: z.coerce.date(),
      })
    ),
    tags: z.array(z.string()).optional(),
    format: formatField,
    ai_notes: aiNotesField,
  }),
});

export const collections = { posts, magazines };
