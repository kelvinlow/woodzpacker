import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_en: z.string(),
    author: z.string(),
    date: z.string() || z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'articles': articleCollection,
};
