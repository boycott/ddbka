import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './collections/news' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string().default('DDBKA Committee'),
    tags: z.array(z.string()).default([])
  })
});

const meetingsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './collections/meetings' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    time: z.string().optional(),
    gallery: z.array(image()).optional()
  })
});

const announcementCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './collections/announcements' }),
  schema: z.object({
    title: z.string(),
    from: z.date(),
    to: z.date(),
    link: z.string().optional()
  })
});

export const collections = {
  'news': newsCollection,
  'meetings': meetingsCollection,
  'announcements': announcementCollection,
};
