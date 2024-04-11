<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Vision'
const ogImage = `${baseUrl}/vision/og.jpg`
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
  <section class="w pt-3xl text-center">
    <span class="px-xs py-3xs bg-light1 rounded text-s" data-aos="fade-up">Vision</span>
    <h1 class="my-s" data-aos="fade-up" data-aos-delay="100">
      We believe that a better world begins with better money
    </h1>
    <div class="text-l mx-auto rich pb-xl" data-aos="fade-up" data-aos-delay="200">
      At our core, we all desire a better world. SORA's revolutionary decentralized economic system is designed to treat
      money as a global commons, allowing the humankind to work together to advance all of humanity.
    </div>
    <div data-aos="fade-up" data-aos-delay="300">
      <YoutubeVideo id="1AGV3urOEiw" cover="/vision/video.jpg" class="mb-xxl" />
    </div>
  </section>
  <section class="rich px-s pb-3xl mx-auto" data-aos="fade-up">
    <p>
      Whether you're an entrepreneur, a community leader, or simply someone who cares about the future of our planet,
      SORA offers a new way of thinking about money and its role in shaping our world. With SORA, you can be part of a
      movement to create a more equitable and sustainable future for all.
    </p>
    <p>
      SORA Card serves as a vital bridge connecting the worlds of traditional finance, the SORA economy, and the larger
      crypto ecosystem. With its innovative features and capabilities, SORA Card empowers users to easily access and
      manage their digital assets, whether they are part of the traditional financial system or the decentralized crypto
      space. By bridging these two worlds, SORA Card is helping to drive the adoption of digital assets and the growth
      of
      the crypto economy, while also providing users with a convenient and secure way to manage their finances. With
      SORA
      Card, the possibilities for financial freedom and innovation are endless.
    </p>
    <p>
      Join us in the pursuit of a better world. Discover how SORA is changing the game when it comes to economic
      innovation, and become a part of the movement that is driving change and progress.
    </p>
    <hr>
    <div class="text-center">
      <Button href="https://sora.org/" title="Learn more at sora.org" class="text-s" target="_blank" />
    </div>
  </section>
</template>