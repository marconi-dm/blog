// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
  colorMode: {
    classSuffix: '',
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
      },
    },
  },
})
