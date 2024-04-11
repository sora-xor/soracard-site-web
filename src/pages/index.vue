<script setup lang="ts">
const isModalOpen = useApplyModalState()

const title = 'SORA Card | Value Freedom'
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
})
</script>

<template>
  <HomeHero />
  <HomeFeatures id="features" />
  <HomeValue />
  <HomeAccordionBanner />
  <HomePossibilities />
  <HomeFAQ id="faq" data-aos="fade-up" />
  <HomeBlog />
  <Banner :image="{
    src: '/home/banner.jpg',
    alt: 'Hand holding SORA Card'
  }" data-aos="fade-up">
    <h2 class="mb-m">Get SORA Card — Value Freedom</h2>
    <p class="text-l mb-l">
      SORA card is a neobanking-style solution that gives direct access to decentralized and non-custodial crypto.
      SORA does not have access to your crypto assets or user data. We value freedom.
    </p>
    <Button title="Apply now" large light @click="isModalOpen = !isModalOpen" />
  </Banner>
</template>