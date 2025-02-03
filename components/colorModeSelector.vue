<template>
  <div class="flex space-x-2 items-center">
    <label
      v-if="showNextModeLabel"
      class="text-gray-500 text-xs"
    >Change to {{ currentMode }}
    </label>
    <button
      @mouseenter="showNextModeLabel = true"
      @mouseleave="showNextModeLabel = false"
      @click="toggleDark"
    >
      <SwitchModeIcon :is-dark="dark" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const showNextModeLabel = ref(false)
  const dark = ref(true)
  const colorMode = useColorMode()
  const toggleDark = () => {
  dark.value = !dark.value
    colorMode.preference = dark.value ? 'dark' : 'light'
  };

const currentMode = computed(() => {
  return colorMode.preference === 'dark' ? 'Light' : 'Dark'
  });
</script>
