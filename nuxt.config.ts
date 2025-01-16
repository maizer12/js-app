// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "@prisma/nuxt", '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss', ['@nuxtjs/google-fonts', {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  }],],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  css: [
  'primeicons/primeicons.css',
  '@/assets/styles/main.css'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#facc15',
            },
            background: {
              DEFAULT: '#1e1e1e',
              secondary: '#111827',
              hover: '#374151'
            }
          }
        }
      }
    }
  }
})