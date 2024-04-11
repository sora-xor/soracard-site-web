<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Request a feature'
const ogImage = `${baseUrl}/request-feature/og.jpg`
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  ogImage,
  ogImageSecureUrl: ogImage,
  twitterImage: ogImage,
})

const githubTileContents = {
  icon: '/icons/github.svg',
  title: 'GitHub',
  description: 'Reach out to the SORA builders community through GitHub with your feature requests and ideas',
  button: {
    title: 'Open SORA RFP GitHub',
    href: 'https://github.com/sora-xor/rfps',
  }
}
</script>

<template>
  <section class="rich px-s pt-3xl pb-xl mx-auto text-center" data-aos="fade-up">
    <h1 class="mb-s">Request a feature</h1>
    <p class="text-l">
      We're passionate about the future of blockchain technology, and we'd love to hear your ideas! If you have a
      feature
      request or suggestion, please don't hesitate to share it with us.
    </p>
    <hr>
    <p>
      We'll give it our full attention and do our best to take it into consideration. Your feedback is valuable to us as
      we work towards improving our services and meeting the needs of our users.
    </p>
    <p class="text-s mb-s">
      For SORA, community involvement is at the core of the development process. We strive to always be user-focused and
      community-driven, which is why we welcome anyone to propose new features or become a SORA builder through our RFP
      process. Your ideas and feedback are important, and we want to ensure that they are given the consideration they
      deserve.
    </p>
    <p class="text-s">
      To avoid any duplication, we encourage you to participate in our community through
      <a href="https://t.me/sora_xor" target="_blank">
        Telegram
      </a> or <a href="https://t.co/AKzRnWBGzz" target="_blank">
        Discord
      </a>, where you can connect with others and stay up to date on the latest updates. Your involvement and input are
      essential to the continued success of SORA Card and the SORA network, and we appreciate your contributions.
    </p>
  </section>
  <section class="w mb-3xl tile">
    <Tile v-bind="githubTileContents" data-aos="fade-up" data-aos-delay="100" />
  </section>
  <ContactSection title="Alternatively, you can simply send us a message with your ideas" />
</template>

<style scoped>
.tile {
  max-width: 44rem;
}
</style>