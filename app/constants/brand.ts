import logoWithoutBg from '~/assets/images/logo-without-bg.png'
import logoWhite from '~/assets/images/logo-white.png'
import logoWhiteBg from '~/assets/images/logo-white-bg.jpeg'
import logoCompact from '~/assets/images/logo4.png'
import logoSidebar from '~/assets/images/logo5.png'
import logoMapFallback from '~/assets/images/logo6.png'

/**
 * Brand asset mapping — all six logos in app/assets/images/:
 * - logoWithoutBg: primary wordmark on dark UI (navbar, footer)
 * - logoWhite: alternate on very dark overlays (ContactMap info card)
 * - logoWhiteBg: favicon + Open Graph / social preview
 * - logoCompact: compact square mark (AppLogo icon slot)
 * - logoSidebar: light-context branding (ContactForm sidebar)
 * - logoMapFallback: map fallback when Google Maps API key is missing
 */
export const BRAND_LOGOS = {
  logoWithoutBg,
  logoWhite,
  logoWhiteBg,
  logoCompact,
  logoSidebar,
  logoMapFallback,
} as const

export const BRAND_ALT = 'Location Technologies'

export const OFFICE_COORDS = { lat: 32.9448778, lng: 72.8522806 } as const

export const OFFICE_ADDRESS = 'Chakwal, Punjab, Pakistan'

export const OFFICE_DIRECTIONS_URL = `https://www.google.com/maps?q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}`

export const OFFICE_MAP_EMBED_URL = (apiKey: string) =>
  `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}&zoom=16`
