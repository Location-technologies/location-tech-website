import { Bricolage_Grotesque, IBM_Plex_Mono, Inter_Tight } from 'next/font/google';

/**
 * Self-hosted brand typefaces (downloaded + inlined at build time by next/font —
 * no runtime request to Google, zero layout shift).
 *
 * The CSS variable names are `--ff-*`, deliberately distinct from the Tailwind
 * `@theme` keys (`--font-display` / `--font-sans` / `--font-mono`) which reference
 * these. Naming them the same would create a self-referential loop.
 */

// Display / headings — characterful variable font. Omit `weight` (it's variable).
export const fontDisplay = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--ff-display',
});

// Body — calm workhorse.
export const fontBody = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--ff-body',
});

// Mono — labels, eyebrows, specs.
export const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--ff-mono',
});
