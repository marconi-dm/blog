<template>
    <section class="not-prose font-mono">
        <div class="column text-gray-400 text-sm">
            <div>Date</div>
            <div>Title</div>

        </div>
        <ul>
            <li v-for="post in postComputed" :key="post._path">
                <NuxtLink :to="post._path" class="column hover:bg-gray-200">
                    <div class="w-8">{{ post.publishedAt }}
                    </div>
                    <div>{{ post.title }}</div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
const { data } = await useAsyncData(
    () => queryContent('/blog')
        .where({ _path: { $ne: '/blog' } })
        .only(['_path', 'title', 'publishedAt'])
        .sort({ publishedAt: -1 })
        .find()
);

const postComputed = computed(() => {
    //verifica se o data returna dados
    if (!data.value) return []
    //cria um set para aplicar uma única incidência no ano retornado
    const setYears = new Set()
    // itera por data, converte o valor em Date e retorna só uma incidência.
    return data.value.map((post) => {
        const year = post.publishedAt ? new Date(post.publishedAt).getFullYear() : ''

        const formatedYears = setYears.has(year) ? '' : year
        setYears.add(year)

        return {
            ...post,
            publishedAt: formatedYears
        }
    })
})
</script>

<style scoped>
.column {
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>
