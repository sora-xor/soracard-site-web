<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Contact'
const ogImage = `${baseUrl}/contact/og.jpg`
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  ogImage,
  ogImageSecureUrl: ogImage,
  twitterImage: ogImage,
})

const telegramTileContents = {
  icon: '/icons/telegram.svg',
  title: 'Telegram',
  description: 'Reach out to the SORA community through Telegram, somebody will help you there shortly',
  button: {
    title: 'Open SORA Telegram',
    href: 'https://t.me/sora_xor',
  }
}
const discordTileContents = {
  icon: '/icons/discord.svg',
  title: 'Discord',
  description: 'Reach out to the SORA community through Discord, somebody will help you there shortly',
  button: {
    title: 'Open SORA Discord',
    href: 'https://t.co/AKzRnWBGzz',
  }
}
</script>

<template>
  <section class="rich px-s pt-3xl pb-xl mx-auto text-center" data-aos="fade-up">
    <h1 class="mb-s">Reach out</h1>
    <p class="text-l">
      We are dedicated to providing assistance whenever you need it. Please don't hesitate to contact us with your
      inquiry, and we will do our best to respond promptly and efficiently.
    </p>
    <hr>
    <p class="text-s">
      To ensure that we can assist you in the most efficient way possible, we ask that you take a moment to review our
      <NuxtLink href="/#faq">
        FAQ
      </NuxtLink> and <NuxtLink href="/support">
        Support
      </NuxtLink> pages, as well as the <a href="https://wiki.sora.org/" target="_blank">
        SORA Wiki
      </a>, <NuxtLink href="/blacklist">
        Restricted Countries
      </NuxtLink>, and <NuxtLink href="/fees">
        Fees and Limits
      </NuxtLink> pages. By doing so, you may find that your question has already been answered and save yourself some
      time. If you are still unable to find the information you need, please don't hesitate to reach out.
    </p>
  </section>
  <section class="w mb-3xl grid">
    <Tile v-bind="telegramTileContents" data-aos="fade-up" data-aos-delay="100" />
    <Tile v-bind="discordTileContents" data-aos="fade-up" data-aos-delay="200" />
  </section>
  <ContactSection title="Alternatively, you can simply send us a message" />
</template>

<style scoped>
.grid {
  max-width: 90rem;
  display: grid;
  gap: var(--space-s);
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>