import logoWithoutBg from '~/assets/images/logo-without-bg.png'
import logoWhite from '~/assets/images/logo-white.png'
import logoWhiteHeader from '~/assets/images/logo-white-header.png'
import logoWhiteBg from '~/assets/images/logo-white-bg.jpeg'
import logoCompact from '~/assets/images/logo4.png'
import logoSidebar from '~/assets/images/logo5.png'
import logoMapFallback from '~/assets/images/logo6.png'

/**
 * Brand asset mapping — logos in app/assets/images/:
 * - logoWithoutBg: primary wordmark (footer / default full layout)
 * - logoWhiteHeader: navbar / on-dark full wordmark (white TECHNOLOGIES, teal pin)
 * - logoWhite: alternate on very dark overlays (ContactMap info card)
 * - logoWhiteBg: favicon + Open Graph / social preview
 * - logoCompact: compact square mark (AppLogo icon slot)
 * - logoSidebar: light-context branding (ContactForm sidebar)
 * - logoMapFallback: map fallback when Google Maps API key is missing
 */
export const BRAND_LOGOS = {
  logoWithoutBg,
  logoWhite,
  logoWhiteHeader,
  logoWhiteBg,
  logoCompact,
  logoSidebar,
  logoMapFallback,
} as const

export const BRAND_ALT = 'Location Technologies'

export const OFFICE_COORDS = { lat: 32.9448778, lng: 72.8522806 } as const

export const OFFICE_ADDRESS = 'Chakwal, Punjab, Pakistan'

export const OFFICE_DIRECTIONS_URL = `https://www.google.com/maps?q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}`

/**
 * Google Maps iframe embed.
 * - With API key: Maps Embed API (`embed/v1/place`) — enable “Maps Embed API” in Google Cloud.
 * - Without key: public query embed (works for showing the pin; no billing required).
 */
export const OFFICE_MAP_EMBED_URL = (apiKey?: string) => {
  const { lat, lng } = OFFICE_COORDS
  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=16`
  }
  return `https://maps.google.com/maps?q=${lat},${lng}&z=16&hl=en&output=embed`
}
