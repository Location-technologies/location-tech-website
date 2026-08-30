import { z } from 'zod';

/**
 * Typed environment access. Kept as a small hand-written Zod schema rather
 * than @t3-oss/env-nextjs: there are currently zero required env vars (the
 * contact API route is a stub) and no client/server split to enforce yet.
 * Revisit @t3-oss/env-nextjs if the env surface grows enough to need one.
 * See MIGRATION.md > Decisions > Env module.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  // Add server/client env vars here as they're introduced (e.g. contact form
  // provider keys in a later phase). Prefix client-exposed vars with
  // NEXT_PUBLIC_ and keep them visually separated from server-only vars if
  // this schema grows.
});

export const env = envSchema.parse(process.env);
