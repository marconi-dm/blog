<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/" class="link">inicio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">sobre</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">projetos</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">blog</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200;
}
</style>
