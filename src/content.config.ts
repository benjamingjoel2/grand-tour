import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS, DESTINATION_SLUGS } from './data/site';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date(),
      author: z.string().default('grand-tour-editors'),
      categories: z.array(z.enum(CATEGORY_SLUGS)).min(1),
      destinations: z.array(z.enum(DESTINATION_SLUGS)).default([]),
      featured: z.boolean().default(false),
      startHere: z.boolean().default(false),
      sponsored: z.boolean().default(false),
      hero: z.object({
        image: image(),
        alt: z.string(),
        caption: z.string().optional(),
        credit: z.string(),
        licence: z.string(),
        licenceUrl: z.string().url().optional(),
        sourceUrl: z.string().url(),
      }),
      plan: z.object({
        heading: z.string(),
        operator: z.string().optional(),
        url: z.string().url().optional(),
        summary: z.string().optional(),
      }),
      sources: z
        .array(
          z.object({
            title: z.string(),
            publisher: z.string().optional(),
            url: z.string().url(),
            retrieved: z.coerce.date().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { posts };
