<template>
  <div>Hello World</div>
</template>

<script setup>
useSeoMeta({
  title: 'Main Page',
  description: 'This is the main page',
  ogTitle: 'Mains Page',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
