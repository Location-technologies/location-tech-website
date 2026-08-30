/**
 * Brand constants — ported from the Nuxt app's `app/constants/brand.ts`, plus the
 * nav/footer data that was previously inline in `TheNavbar.vue` / `TheFooter.vue`.
 */

export const BRAND_ALT = 'Location Technologies';

/**
 * Logo assets, copied into `next/public/brand/`:
 * - wordmark:       primary wordmark (footer / default full layout)
 * - wordmarkOnDark: navbar / on-dark full wordmark (white TECHNOLOGIES, teal pin)
 * - white:          alternate on very dark overlays
 * - compact:        compact square mark (Logo icon slot)
 */
export const LOGOS = {
  wordmark: '/brand/logo-without-bg.png',
  wordmarkOnDark: '/brand/logo-white-header.png',
  white: '/brand/logo-white.png',
  compact: '/brand/logo4.png',
} as const;

export const OFFICE_COORDS = { lat: 32.9448778, lng: 72.8522806 } as const;
export const OFFICE_ADDRESS = 'Chakwal, Punjab, Pakistan';
export const OFFICE_DIRECTIONS_URL = `https://www.google.com/maps?q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}`;

export const CONTACT = {
  email: 'info@locationtechnologies.io',
  phoneHref: '+923348706354',
  phoneDisplay: '+92 334 8706354',
  addressLine1: 'House No. MCB 1/586, Mohallah Jafrabad,',
  addressLine2: 'Tehsil & District Chakwal',
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const POLICY_LINKS: readonly NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy/sportsmania' },
  { label: 'Refund Policy', href: '/privacy/sportsmania-refund' },
  { label: 'Service Delivery Policy', href: '/privacy/sportsmania-shipping' },
  { label: 'Business Model', href: '/privacy/sportsmania-business-model' },
];

export const FOOTER_SERVICES: readonly NavLink[] = [
  { label: 'Geographic & Web Mapping', href: '/services' },
  { label: 'SaaS & PaaS Development', href: '/services' },
  { label: 'Legacy System Modernization', href: '/services' },
  { label: 'AI-Driven Systems', href: '/services' },
  { label: 'WordPress & Shopify', href: '/services' },
  { label: 'DevOps Infrastructure', href: '/services' },
];

export type Social = { label: string; href: string };

export const SOCIALS: readonly Social[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/locationtechnologies/',
  },
];

export const FOOTER_BLURB =
  'Full-stack software — GIS, SaaS, AI, e-commerce, and cloud infrastructure — engineered for enterprises across Pakistan.';
