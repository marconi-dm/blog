<template>
  <section :class="status">
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="error === 'error'">Something went wrong... Try again!</div>
    <div v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in repos"
          :key="repo.id"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
        >
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repo.name }}</div>
              <div>{{ formatDate(repo.created_at) }}</div>
            </div>
            <p class="text-sm">
              {{ repo.description }}
            </p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data, error, status } = await useFetch(
  'https://api.github.com/users/marconi-dm/repos'
)

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', options)
}

const repos = computed(() =>
  data.value?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
)
</script>
