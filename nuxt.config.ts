// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/content',
  ],
  devtools: { enabled: true },

  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'dracula-soft',
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      checker: true,
    },
  },

})
