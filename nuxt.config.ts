import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  srcDir: 'app',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
    { path: '~/components', ignore: ['layout/**'] },
    { path: '~/components/layout', pathPrefix: false },
  ],

  vite: {
    plugins: [tailwindcss() as any],
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@nuxt/content',
  ],

  image: {
    provider: 'none',
  },

  googleFonts: {
    families: {
      // Plus Jakarta Sans: readable, proportional, no condensed/stretched look on mobile
      'Plus Jakarta Sans': [400, 500, 600, 700, 800],
      'DM Sans': [400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },

  app: {
    head: {
      title: 'Location Technologies Pvt. Ltd.',
      meta: [
        { name: 'description', content: 'We deliver precision GIS mapping, advanced GPS tracking, and robust geofencing solutions built to scale for your business.' },
        { name: 'theme-color', content: '#0A1628' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Location Technologies Pvt. Ltd.' },
        { property: 'og:description', content: 'We deliver precision GIS mapping, advanced GPS tracking, and robust geofencing solutions built to scale for your business.' },
        { property: 'og:url', content: 'https://location-tech.com' },
        { property: 'og:image:alt', content: 'Location Technologies' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Location Technologies Pvt. Ltd.' },
        { name: 'twitter:description', content: 'We deliver precision GIS mapping, advanced GPS tracking, and robust geofencing solutions built to scale for your business.' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: '',
    },
  },

  content: {
    experimental: {
      nativeSqlite: true,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/portfolio/sportsmania',
        '/portfolio/travelista',
        '/portfolio/maplytics',
        '/portfolio/geoguard',
        '/portfolio/personal-finance-tracker',
      ],
    },
  },
})
