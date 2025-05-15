import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
