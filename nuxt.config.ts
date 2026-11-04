// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  experimental: {
    appManifest: false
  },

  app: {
    head: {
      title: 'Gangchil Real Estate | Luxury Land, Plots, Flats & Hotel Suites in Dhaka',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        {
          name: 'description',
          content: 'Discover prime residential plots (3, 5, 10, 20 Katha), luxury condominiums, and commercial hotel suites by Gangchil. 100% legal registration guarantee, flexible installment plans, and scenic green living on Dhaka-Savar Highway.'
        },
        { name: 'theme-color', content: '#081410' },
        { property: 'og:title', content: 'Gangchil Real Estate - The Premier Land & Living Community' },
        { property: 'og:description', content: 'Explore 3,500+ acres of planned green township. 3 to 20 Katha plots ready with instant handover and long-term EMI facilities.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon_32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon_192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon_180.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/components.css'
  ]
})
