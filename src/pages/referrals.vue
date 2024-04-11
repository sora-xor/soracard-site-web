<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Referrals'
const ogImage = `${baseUrl}/referrals/og.jpg`
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
  <section class="rich px-s py-3xl mx-auto text-center" data-aos="fade-up">
    <span class="px-xs py-3xs bg-light1 rounded text-s">Coming soon</span>
    <h1 class="my-m">
      Development is currently underway
    </h1>
    <p class="text-l">
      The referral system is tentatively scheduled for launch during Phase 2 of the SORA Card rollout.
    </p>
    <hr>

    <Button href="https://wiki.sora.org/referral.html" title="Learn more" class="text-s" target="_blank" />
    <p class="text-s mt-xs">
      about the SORA network referral system
    </p>
  </section>
</template>