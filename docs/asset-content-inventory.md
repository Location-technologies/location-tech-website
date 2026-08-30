# Content & Asset Inventory — location-tech-website

Generated: 2026-08-29, during P00 of issue #32 (Epic: Foundations, brand facts & Next.js 15 app scaffold).

## 1. Content inventory (`content/*.json`)

### `content/portfolio.json`
- **Total records:** 7 (`id` values 1, 3, 4, 5, 7, 8, 9 — non-contiguous; ids 2 and 6 were removed/reassigned at some point, no gap-filling needed, just noting it).
- **Published:** 5 — `sportsmania`, `travelista`, `maplytics`, `geoguard`, `personal-finance-tracker` (these match the 5 static prerender routes in `nuxt.config.ts`).
- **Unpublished:** 2 — `spatial-estate`, `tailorme`. Both have `thumbnail` set to `/images/portfolio/spatial-estate.jpg` and `/images/portfolio/tailorme.jpg` respectively — **these files do not exist anywhere in the repo** (checked `app/assets/images/` and there is no `public/images/portfolio/` directory at all). Not a current breakage since `published: false` keeps them out of rendered pages, but flag before ever publishing either.
- **Fields:** `id, slug, title, client, category, thumbnail, liveUrl?, shortDesc, description, technologies[], year, featured, published, status?('shipped'|'in-progress'|'foundation'), highlights[]?, deliverables[]?({name, stack, status}), roadmap[]?`.
- **Staleness:** none found — all 5 published projects have real live URLs, current-year (`2025`) dates, and detailed descriptions. `sportsmania` is `status: "in-progress"` with a `roadmap` array — accurate reflection of it being mid-build, not stale.

### `content/services.json`
- **Total records:** 6.
- **Fields:** `id, slug, title, icon (mdi:*), shortDesc, description, category`.
- **Categories present:** `mapping, saas, modernization, ai, ecommerce, devops` — one service each, matches the "6 real services" the IMPLEMENTATION_GUIDE.md target described.
- **Staleness:** none found — this already reflects the real service lineup (Geographic & Web Mapping, SaaS & PaaS, Legacy Modernization, AI-Driven Systems, WordPress & Shopify, DevOps Infrastructure).

### `content/team.json`
- **Total records:** 8.
- **Fields:** `id, name, role, tier(directors|management|team-lead|developers), order, bio?, photo?, linkedin?`. (Note: the `tier` enum in the issue's description also lists `interns` — no record currently uses that tier value.)
- **Photo path check:** all 8 `photo` paths (`assets/images/abdulkhaliq.png`, `nabeel.jpeg`, `yasir.jpeg`, `adeel.jpeg`, `zain.jpeg`, `saad.jpeg`, `naeem.jpeg`, `abdullah.jpeg`) resolve to real files in `app/assets/images/` — no broken references.
- **Orphaned asset found:** `app/assets/images/usman-malik.jpeg` (78,114 bytes) exists but is **not referenced by any team record** — either a removed team member's leftover photo or a not-yet-added member. Flag for the content owner to confirm.
- **Staleness:** 3 of 8 members (directors tier) have an identical generic bio ("Sets strategic direction for Location Technologies' GIS and software delivery.") — not incorrect, but likely a copy-paste placeholder rather than individualized bios.

## 2. Asset inventory (`app/assets/images/`)

25 files + `.gitkeep`, **~16.1 MB total**. Full listing with measured sizes:

| File | Size | Flag |
|---|---:|---|
| `Remove background project.png` | 8,061,947 B (7.7 MB) | **>500KB — FLAG** |
| `abdulkhaliq.png` | 1,371,789 B (1.3 MB) | **>500KB — FLAG** |
| `hero-aerial-night.png` | 1,285,979 B (1.2 MB) | **>500KB — FLAG** |
| `favicon-new.png` | 1,030,520 B (1.0 MB) | **>500KB — FLAG** (unusually large for a favicon source) |
| `logo-white-bg.jpeg` | 958,712 B (936 KB) | **>500KB — FLAG** |
| `terrain-dusk.png` | 811,909 B (793 KB) | **>500KB — FLAG** |
| `ChatGPT Image Aug 5, 2026, 05_57_23 PM.png` | 787,007 B (769 KB) | **>500KB — FLAG** (also has a non-standard filename — spaces/commas/AI-tool-default name; rename before P02 asset port) |
| `abdullah.jpeg` | 187,733 B | ok |
| `personalfinancetracker.png` | 314,802 B | ok |
| `logo-without-bg.png` | 271,273 B | ok |
| `logo-white-header.png` | 266,070 B | ok |
| `travellista.jpeg` | 142,801 B | ok |
| `sportsmania.jpeg` | 121,728 B | ok |
| `saad.jpeg` | 121,024 B | ok |
| `logo-white.png` | 117,240 B | ok |
| `maplytics.jpeg` | 111,592 B | ok |
| `logo5.png` | 91,013 B | ok |
| `usman-malik.jpeg` | 78,114 B | ok (orphaned — see §1) |
| `geoguard.png` | 78,038 B | ok |
| `logo4.png` | 77,350 B | ok |
| `logo6.png` | 70,843 B | ok |
| `naeem.jpeg` | 51,207 B | ok |
| `zain.jpeg` | 48,910 B | ok |
| `adeel.jpeg` | 46,355 B | ok |
| `yasir.jpeg` | 46,355 B | ok (identical byte size to `adeel.jpeg` — worth a checksum diff to confirm these aren't accidentally the same photo) |
| `nabeel.jpeg` | 41,904 B | ok |

**Discrepancy vs. the issue text:** the issue cites `naeem.jpeg` at 2.5 MB, `logo-white-bg.jpeg` at 937 KB, `yasir.jpeg` at 859 KB, `adeel.jpeg` at 600 KB, and `saad.jpeg` at 554 KB as the oversized set. Measured on disk: `naeem.jpeg` is 51 KB, `yasir.jpeg` is 46 KB, `adeel.jpeg` is 46 KB, `saad.jpeg` is 121 KB — all comfortably under the 500 KB threshold. Only `logo-white-bg.jpeg` (936 KB) and `Remove background project.png` (7.7 MB, issue said 7.7 MB — matches) line up with the issue's numbers. **This table reports actual measured sizes; the issue's figures for naeem/yasir/adeel/saad are stale and should not be acted on.** The real oversized set (>500KB) is the 7 files marked FLAG above, which additionally includes `abdulkhaliq.png`, `hero-aerial-night.png`, `favicon-new.png`, `terrain-dusk.png`, and the ChatGPT-named PNG — none of which the issue mentioned.

**Action:** flag only, per issue scope — no files were deleted, renamed, or compressed as part of this pass. Compression/removal is follow-up work for whoever owns image assets.

## 3. `IMPLEMENTATION_GUIDE.md` — never-applied corrections audit

`IMPLEMENTATION_GUIDE.md` is a 10-phase **content alignment** guide (predates this migration epic, unrelated to Nuxt→Next.js work directly) aimed at replacing placeholder business facts (2019 founding date, GIS-only messaging, `#` social links, inflated stats) with the real ones (14 Nov 2023 founding, full-stack service lineup, real LinkedIn).

Each phase was checked directly against the current component source (not assumed):

| Phase | Topic | Status | Evidence |
|---|---|---|---|
| 1 | Real portfolio projects | ✅ Applied | `content/portfolio.json` has the real project set (SportsMania, Travelista, MapLytics, GeoGuard, Personal Finance Tracker, +2 unpublished) |
| 2 | Correct services | ✅ Applied | `content/services.json` has the 6 real services (§1 above) |
| 3 | Content schema fix | ✅ Applied | `content.config.ts` category enum accepts `mapping/saas/modernization/ai/ecommerce/devops` |
| 4 | Portfolio filter categories | ✅ Applied | `PortfolioGrid.vue` — `categories`, `categoryIcons`, `categoryLabels`, `categoryShort`, `bgGradients`, and the 4 CSS gradient classes all already use `saas/mapping/mobile/ecommerce` |
| 5 | Tech stack section | ✅ Applied (broadened further than the guide's own suggestion) | `ServicesTechStack.vue` now lists 18 technologies (Python, Django, Node.js, Vue/Nuxt, React, Next.js, WordPress, Shopify, QGIS, ArcGIS, GeoServer, Erdas Imagine, Lidar, Docker, Kubernetes, PostgreSQL, PostGIS) — broader than the guide's proposed 12-item list, same intent (not GIS-only) |
| 6 | Founding date fix (2019 → 14 Nov 2023) | ✅ Applied | `AboutStory.vue` milestones start at 2023 ("Founded... 14 November 2023"), story paragraphs match the guide's corrected text |
| 7 | Stats update | ✅ Applied | `HomeStats.vue` and `HomeHero.vue` both show `10+`/`6+` projects, `6+` industries, `2+` years — consistent between the two files (current live values differ slightly from the guide's exact suggested numbers, e.g. Projects Delivered shows `6+` not `10+`, but both files agree with each other, which was the guide's actual requirement) |
| 8 | LinkedIn & social links | ✅ Applied | `TheFooter.vue` `socials` array has the real LinkedIn URL and only LinkedIn (Twitter/Facebook removed as instructed); email/phone/address also updated to `info@locationtechnologies.io` |
| 9 | Footer services list | ✅ Applied | `TheFooter.vue` `services` array lists the current 6 real services, matching `content/services.json` |
| 10 | Hero tagline (optional) | ✅ Applied | `HomeHero.vue` hero paragraph and eyebrow text both match the guide's suggested broadened copy |

**Conclusion: contrary to the issue's premise ("IMPLEMENTATION_GUIDE.md corrections were never applied"), all 10 phases are already applied in the current `main` branch.** No actionable backlog items remain from this guide. This audit found nothing to fold into P00 beyond this record — the issue's assumption appears to have been outdated by the time this epic was opened.

## 4. Brand palette verification (cross-ref A2)

Programmatic pixel sampling of `app/assets/images/logo-without-bg.png` (3355×2660, RGBA, opaque-pixel clustering + gradient scanlines):

- **Dominant cluster:** `#0060A8` (deep blue), ~20% of opaque pixels — the single most common color in the mark.
- **Secondary cluster range:** a spread of teal→green tones from `#007888` through `#00C878`/`#00D070`, collectively a similarly large share of pixels — consistent with a blue→green gradient across the mark rather than two flat fills.
- **Verdict vs. current CSS tokens** (`app/assets/css/main.css`):
  - `--color-brand-green: #00C896` — **confirmed close match**. The brightest extracted green endpoint (`#00C878`) differs by only ΔB=30/255 (~12%) from the CSS value; same green channel exactly (0xC8). Keep as-is.
  - `--color-brand-cyan: #00B4D8` — **judgment call, not a clean match**. The logo's dominant/endpoint blue is a deeper navy-blue (`#0060A8`), not the bright cyan used across the UI. Two readings are equally defensible: (a) the CSS cyan is a deliberately brightened/vibrant UI accent derived from the logo's blue for better contrast and accessibility on the dark `#0A1628` background (common, reasonable practice) — recommend **keep `#00B4D8`**, or (b) introduce a second "logo-blue" token (`#0060A8`) for places that should trace the mark exactly. Given `#00B4D8` is already used across ~15 component/CSS locations (grep results below) and no visual complaint drove this issue, **recommendation is to keep `#00B4D8` unchanged** and treat `#0060A8` as documented-but-not-adopted logo-source data, revisited only if a future brand refresh wants literal logo-color fidelity.
  - `--color-brand-dark: #0A1628` — **not derived from the logo mark** (the mark has no near-black opaque fill at this darkness/desaturation). It functions as the site's dark page-background ink, independent of the logo's foreground colors. No correction applicable; not comparable to the logo extraction.
- **Gradient direction & usage** (from `app/assets/css/main.css` + component grep):
  - `.gradient-text` — `135deg, #00B4D8 → #00C896` — used for hero heading accent text (`HomeHero.vue`), footer icon, and general gradient buttons (`.gradient-bg` reuses the same stops).
  - `.gradient-text-hero` — `120deg, #00C896 0% → #00B4D8 60% → #38E0FF 100%` — 3-stop variant, used specifically for the hero's largest headline treatment.
  - Both directions/stop orders are consistent with the logo mark's own blue→green gradient sampled above (direction within the small mark couldn't be pinned to an exact angle from bounding-box sampling alone, but the blue-to-green progression matches).
  - **Usage sites** (from `grep -rn "#00B4D8\|#00C896\|#0A1628\|#64748B"`): `app/assets/css/main.css` (tokens + 3 gradient rules), `nuxt.config.ts:47` (theme-color meta = `#0A1628`), `ServicesProcess.vue:156-157` (SVG gradient stops), `ServicesGrid.vue:73`, `ServicesTechStack.vue:22,38,202`, `TheFooter.vue:155-157` (SVG icon strokes), `PortfolioGrid.vue:210-222` (4 category gradient fills), `PortfolioCaseStudy.vue:208,323-335` (glow + 4 gradient backgrounds). No divergent one-off hexes found beyond these 4 tokens.
  - **Light vs. dark usage:** the site has no light/dark mode system (no `dark:` Tailwind variants, no color-mode module) — it is single-theme dark. So "light/dark usage" here means: used directly on the dark `#0A1628` base (hero, footer, portfolio cards, most of the app) vs. used against light backgrounds (`ServicesTechStack.vue`'s tech marquee section, which has a light `#F0FAFA`→white gradient background — the only light-background section in the app).

Full swatch/gradient rendering: see `/docs/brand-sheet.pdf`.
