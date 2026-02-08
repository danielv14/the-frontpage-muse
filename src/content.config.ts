import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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
  }),
});

export const collections = { posts };
