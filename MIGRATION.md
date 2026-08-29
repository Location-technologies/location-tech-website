# Migration: Nuxt 3 → Next.js 15

Tracking doc for issue [#32](https://github.com/Muadeel56/location-tech-website/issues/32) and everything downstream. Working branch: `feat/issue-32-nextjs-foundations`.

## Goals

- Migrate `location-tech-website` from Nuxt 3 (static `nuxt generate`, deployed to Cloudflare Pages) to Next.js 15 (App Router, TypeScript, Tailwind v4), eventually targeting Cloudflare Workers.
- Keep the live site on `main` available and deployable throughout — no framework code lands on `main` until the migration is ready to cut over.
- Do the migration work on a long-lived branch, with the Next.js app scaffolded **in-repo** under `/next` as a second member of the pnpm workspace, alongside the existing Nuxt app at the repo root. Both apps coexist until cutover.

## Branch & workspace strategy

- Working branch: `feat/issue-32-nextjs-foundations` (branched off `main`).
- `pnpm-workspace.yaml` packages: `.` (existing Nuxt app, repo root) + `next` (new Next.js app) — both resolve through one workspace/lockfile.
- `main` remains the sole deploy source for `.github/workflows/deploy.yml` (push-to-`main`-only) — nothing on this branch changes that workflow or any Nuxt app file.
- **Content freeze notice:** non-critical content/design changes to the live Nuxt app should pause while this migration branch is active, to avoid the live site and the eventual cutover baseline drifting apart. **Action for a human:** post this notice wherever the team coordinates (GitHub issue comment / Slack/etc.) — not something this automated pass can do.

## Decisions

### Type direction
**Decision: keep Plus Jakarta Sans (display) + DM Sans (body).**
Rationale: both are already fully wired via `@nuxtjs/google-fonts` and used across every page of the live site; nothing in this issue or the brand-sheet work surfaced a concrete complaint about the current type, only "decide/repitch." Swapping fonts this early is high-visibility churn with no clear payoff, and P02 (full design-token port) is a better checkpoint to revisit type once real Next.js layouts exist to judge it against. Override here if the team disagrees before P02 starts.

### Brand palette
- `--color-brand-green: #00C896` — **confirmed**, close match to the logo's extracted green endpoint (`#00C878`, ΔB≈12%).
- `--color-brand-cyan: #00B4D8` — **kept as-is** (judgment call). The logo's dominant blue is a deeper navy (`#0060A8`); `#00B4D8` reads as a deliberately brightened UI accent rather than a literal logo sample, and it's already used in ~15 places. No visual complaint drove this issue, so no change recommended now — flagged for a future brand refresh if literal logo-color fidelity is ever wanted.
- `--color-brand-dark: #0A1628` — not derived from the logo mark (used as page-background ink); not comparable to the extraction, no correction applicable.
- Gradients: `.gradient-text` (135deg, cyan→green) and `.gradient-text-hero` (120deg, green→cyan→`#38E0FF`) both track the logo's own blue→green progression.
- Full detail, swatches, and evidence: [`/docs/asset-content-inventory.md`](./docs/asset-content-inventory.md) §4 and [`/docs/brand-sheet.pdf`](./docs/brand-sheet.pdf).

### MDX strategy
**Decision: `next-mdx-remote`**, not `@next/mdx` or Content Collections.
Rationale: this project's content model is JSON-driven (`content/portfolio.json`, `services.json`, `team.json`), not filesystem-`.mdx`-driven. `next-mdx-remote` renders MDX from arbitrary sources (including data adjacent to or replacing the current JSON files) at request- or build-time, which fits that pattern. `@next/mdx` compiles `.mdx` files directly into routes — a worse fit here since there's no plan to move content into per-page `.mdx` files. Only one library is installed (see B4 in the plan / `next/package.json`).

### Env module
**Decision:** a small hand-written Zod module (`next/src/lib/env.ts`) instead of `@t3-oss/env-nextjs`.
Rationale: there are currently zero required env vars (the contact API route is a stub) and no client/server env split to enforce yet. Revisit `@t3-oss/env-nextjs` if the env surface grows enough to need that split.

## Per-page "done" definition

A page is considered migrated when:
1. Its route exists under `next/src/app/(site)/...` and renders content equivalent to the corresponding Nuxt page.
2. Visual parity is confirmed against the ported design tokens (P02+ token set — never a copy-paste of the Nuxt `@theme` block).
3. `pnpm --filter next build` succeeds for the branch with no type or lint errors.
4. The page has no dependency on Node APIs incompatible with the Cloudflare Workers runtime (no `better-sqlite3`, no heavy `fs` usage, no default `next/image` optimizer until the P03 custom loader lands).
5. It's been manually smoke-tested via `next start` locally.

## Rollback path

- **If the migration is paused or abandoned:** no action needed — `main` is never touched by migration work, so `deploy.yml` keeps deploying the unchanged Nuxt site from `main`.
- **If a partial Cloudflare Workers cutover has already happened and needs reverting:** roll back via the Cloudflare dashboard (Workers & Pages → Deployments → select the previous good deployment → Rollback), or re-trigger `deploy.yml` against the last-known-good `main` commit to restore the Pages deployment.

## P00 status

- [x] `feat/issue-32-nextjs-foundations` branch created
- [x] `/docs/brand-sheet.pdf` committed
- [x] `/docs/asset-content-inventory.md` written
- [~] Cloudflare creds in CI secrets, not repo — **already true** for the existing `deploy.yml` (it reads `secrets.CLOUDFLARE_API_TOKEN`/`secrets.CLOUDFLARE_ACCOUNT_ID`, confirmed, not repo files). What's still outstanding is new setup for the eventual Workers cutover — see the checklist below.

## A6 — Cloudflare account resources (MANUAL — ACTION REQUIRED, NOT DONE)

Claude has no Cloudflare account access in this environment (no `wrangler` auth, no API token) — none of the following were performed automatically. A human with Cloudflare dashboard access must complete these:

- [ ] Confirm the `location-tech` Cloudflare Pages project exists (Dashboard → Workers & Pages)
- [ ] Decide and create a Workers service name for the eventual migration target, e.g. `location-tech-web`; record the chosen name here: ______
- [ ] Note the zone / DNS records currently serving the production domain (for reference during cutover): ______
- [ ] Generate a scoped Cloudflare API token limited to Workers + Pages deploy permissions (not the Global API Key)
- [ ] Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub Actions **repository secrets** (Settings → Secrets and variables → Actions) if they need rotating/adding for the new Workers service — do **not** commit them to any file in this repo
- [ ] Confirm the existing `deploy.yml` workflow's secrets still resolve correctly after any token rotation

## P01 status

- [ ] `pnpm --filter next build` passes locally / in CI
- [ ] Holding page renders locally with Tailwind classes working
