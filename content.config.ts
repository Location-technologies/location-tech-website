import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const serviceSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  icon: z.string(),
  shortDesc: z.string(),
  description: z.string(),
  category: z.enum(['gis', 'tracking', 'geofencing', 'analytics']),
})

const projectSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  client: z.string(),
  category: z.string(),
  thumbnail: z.string(),
  shortDesc: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  year: z.number(),
  featured: z.boolean(),
})

export default defineContentConfig({
  collections: {
    services: defineCollection({
      type: 'data',
      source: 'services.json',
      schema: z.object({ services: z.array(serviceSchema) }),
    }),
    portfolio: defineCollection({
      type: 'data',
      source: 'portfolio.json',
      schema: z.object({ projects: z.array(projectSchema) }),
    }),
  },
})
