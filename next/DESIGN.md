# Design principles

This is the brand sheet turned into rules. Hold the line on it — the point of P02
is that pages get **assembled from a system**, not hand-styled, and that the
result reads as made by people, not generated.

## Anti-"AI-generic" — things we do not ship

- **No purple/blue gradient hero on white.** Our one gradient is cyan→green, and
  it lives on dark.
- **No centered-everything layouts.** Center a hero if it earns it; body sections
  are left-aligned with a real measure.
- **No `rounded-lg` on every card.** One radius family (`--radius-card` = 1rem for
  cards, `--radius-pill` for buttons/chips). Don't sprinkle arbitrary radii.
- **No emoji section markers.** Use `<Eyebrow>` (mono, tracked) or nothing.
- **No accent-bar-on-card cliché.** No 4px coloured left border to fake structure.
- **Commit to one bold move — the 3D hero — and keep everything around it quiet.**
  Exactly one attention-grabbing element per view. The rest is calm.
- **Asymmetric layouts where they help.** Off-grid accents tied to the map/pin
  motif (coordinates, pin shapes, dot fields — see `.dot-layer`).
- **Real photography** of the team and office, not stock or generated imagery.
- **Specific copy** — numbers, project names, dates — over vague marketing lines.
- **Intentional imperfection:** varied vertical rhythm between sections, hand-tuned
  line breaks on headings (`text-wrap: balance` plus the occasional manual break),
  accents that sit slightly off the grid on purpose.

## Colour — tokens are the only source

- **Zero hard-coded hex in `src/components/`.** Colour comes from the semantic
  tokens only. Inline SVG uses `stroke="currentColor"` / `fill="currentColor"`.
- Semantic tokens (resolve per theme): `bg`, `surface`, `surface-raised`,
  `footer`, `text`, `text-muted`, `border`, `accent`, `accent-2`, `on-accent`,
  `ring`, `success`, `warn`. Utilities: `bg-*`, `text-*`, `border-*`, `ring-*`.
- `brand-cyan` / `brand-green` / `brand-sky` / `ink` and the `neutral-*` ramp are
  **static** — use them only for literal brand marks and gradient stops, never as
  ad-hoc UI colours (reach for a semantic token instead).
- Gradients: `.gradient-bg` / `.gradient-text` (135°, cyan→green) and
  `.gradient-text-hero` (120°, green→cyan→sky). Defined once in `globals.css`.
- Light + dark: dark-first. Values live on `:root, .dark` and `.light` in
  `globals.css`; `@theme inline` aliases them. `@theme` can't be conditional, so
  never put a theme-varying colour directly in `@theme`.
- Theme is a class on `<html>` (`.dark` / `.light`), reconciled before paint by
  `ThemeScript`. JS-disabled users with `prefers: light` get dark (static
  fallback) — acceptable.

## Type

- **Display / headings:** Bricolage Grotesque (`font-display`). Characterful.
- **Body:** Inter Tight (`font-sans`). Calm workhorse.
- **Labels / eyebrows / specs:** IBM Plex Mono (`font-mono`), uppercase,
  `tracking ≈ 0.14–0.18em`.
- All self-hosted via `next/font` (zero layout shift). `font-synthesis: none`.
- Use the deliberate modular scale (`text-2xs … text-3xl`, plus `text-h1`,
  `text-h2`, `text-hero-sub`) — not Tailwind's default sizes.
- Headings: weight 700, `letter-spacing: -0.02em`, `text-wrap: balance`.

## Spacing, radius, shadow, motion

- One radius family: `--radius-sm`, `--radius-md`, `--radius-card`,
  `--radius-pill`.
- Restrained shadows: `--shadow-card`, `--shadow-card-hover`,
  `--shadow-glow-cyan`. Don't invent new ones inline.
- Motion tokens: `--ease-standard`, `--ease-emphasis`, `--duration-fast|base|slow`
  (`ease-standard` / `ease-emphasis` utilities). Keep durations consistent.
- **Every animation honours `prefers-reduced-motion`.** The motion primitives
  (`<Reveal>`, `<Stagger>`, `<Parallax>`) and `useScrollReveal` already render the
  resting state when it's set — follow that pattern for anything new.
- One bold motion moment per view, max.

## Where things live

- Tokens + base + utilities: `src/app/globals.css`
- Fonts: `src/lib/fonts.ts`
- Component kit: `src/components/ui/`
- Motion primitives: `src/components/motion/`
- Hooks: `src/hooks/`
- Every component, both themes: `/kitchen-sink`
