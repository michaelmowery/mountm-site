import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    category: z.enum(['App', 'Game', 'Website', 'Client work']),
    status: z.enum(['Live', 'Coming soon', 'Past work']),
    statusNote: z.string().optional(),
    platforms: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    privacy: z.string().url().optional(),
    support: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(50),
  }),
});

export const collections = { projects };
