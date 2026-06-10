import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const serviceSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  icon: z.string(),
  shortDesc: z.string(),
  description: z.string(),
  category: z.enum(['mapping', 'saas', 'modernization', 'ai', 'ecommerce', 'devops']),
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

const teamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  tier: z.enum(['directors', 'management', 'team-lead', 'developers']),
  order: z.number(),
  bio: z.string().optional(),
  photo: z.string().optional(),
  linkedin: z.string().url().optional(),
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
    team: defineCollection({
      type: 'data',
      source: 'team.json',
      schema: z.object({ members: z.array(teamMemberSchema) }),
    }),
  },
})
