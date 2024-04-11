<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.fullPath, () => queryContent(route.fullPath).findOne())

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

const { baseUrl } = useRuntimeConfig().public

const title = data.value.title
const description = data.value.description
const ogImage = data.value.og

const meta = {
  ...(title ? {
    title: title,
    ogTitle: title,
    twitterTitle: title,
  } : {}),
  ...(description ? {
    description: description,
    ogDescription: description,
    twitterDescription: description,
  } : {}),
  ...(ogImage ? {
    ogImage: `${baseUrl}${ogImage}`,
    ogImageSecureUrl: `${baseUrl}${ogImage}`,
    twitterImage: `${baseUrl}${ogImage}`
  } : {})
}

useSeoMeta(meta)
</script>

<template>
  <ContentRenderer v-if="data" :value="data">
    <article class="pb-3xl">
      <BlogHeroSection :title="data.title || 'Title is missing'"
        :description="data.description || 'Description is missing'"
        :image="data.image || 'https://sora.org/assets/products/sora-card.jpg'"
        :date="data.date || 'Date is missing'" />

      <ContentRendererMarkdown :value="data" class="text-m w rich px-s" data-aos="fade-up" />
    </article>
    <template #empty>
      <article class="content w text-center py-3xl">
        <h1 class="text-3xl mb-s break-word" data-aos="fade-up">Content not found</h1>
        <p class="text-l mb-l" data-aos="fade-up" data-aos-delay="100">
          This article has no contents 🫠
        </p>
        <Button href="/blog" title="Back" large data-aos="fade-up" data-aos-delay="200" />
      </article>
    </template>
  </ContentRenderer>
</template>