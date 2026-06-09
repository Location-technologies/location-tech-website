import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  srcDir: 'app',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
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
    '@nuxt/icon',
    '@nuxt/content',
  ],

  googleFonts: {
    families: {
      Syne: [400, 600, 700, 800],
      'DM Sans': [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Location Technologies Pvt. Ltd.',
      meta: [
        { name: 'description', content: 'GIS, GPS Tracking & Geofencing Solutions' },
        { name: 'theme-color', content: '#0A1628' },
      ],
    },
  },

  nitro: {
    prerender: { crawlLinks: true },
  },
})
