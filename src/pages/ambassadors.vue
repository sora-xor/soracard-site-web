<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Ambassadors'
const ogImage = `${baseUrl}/ambassadors/og.jpg`
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
  <section class="rich px-s py-3xl mx-auto" data-aos="fade-up">
    <span class="px-xs py-3xs bg-light1 rounded text-s">Ambassadors</span>
    <h1 class="text-xl my-m">
      We believe in building a better world through decentralisation and empowering communities
    </h1>
    <p class="text-l">
      The SORA community is proud to introduce the SORA Ambassador Program, designed to empower our community members to
      spread awareness about SORA and its mission to build a decentralized and democratic economic system.
    </p>
    <hr>
    <p>
      You will have access to exclusive resources, such as training materials and support from the SORA team, to help
      you
      effectively communicate the message and build a strong network of supporters.
    </p>
    <figure class="mt-xl mb-l">
      <YoutubeVideo id="Gcqw4g1g-bo" cover="/ambassadors/video.jpg" class="mb-s" />
      <figcaption class="text-center text-s">
        Become a SORAmbassador
      </figcaption>
    </figure>
    <p>
      By becoming a SORA ambassador, you will also have the chance to collaborate with other like-minded individuals
      from
      around the world and make a meaningful impact in the crypto and blockchain space. You will be able to participate
      in
      events, webinars, and other activities that will help you grow as a leader and expand your knowledge of the
      industry.
    </p>
    <hr>
    <p class="text-center">
      Join the SORA community and be part of a movement to create a more equitable and prosperous world for all.
    </p>
    <hr>
    <div class="text-center">
      <Button href="https://medium.com/sora-xor/天-become-a-sorambassador-ed290dadb247" title="Learn more" class="text-s"
        target="_blank" />
    </div>
  </section>
</template>