<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Blog'
const ogImage = `${baseUrl}/blog/og.jpg`
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  ogImage,
  ogImageSecureUrl: ogImage,
  twitterImage: ogImage,
})
</script>

<template>
  <h1 class="text-3xl w text-center pt-3xl pb-xl" data-aos="fade-up">Blog</h1>
  <BlogList accent data-aos="fade-up" data-aos-delay="200" />
</template>