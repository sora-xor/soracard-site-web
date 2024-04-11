<script setup lang="ts">
import type { Link } from '~/lib/constants/types'

const socials: (Link & { icon: string })[] = [{
  title: 'X/Twitter',
  icon: 'x',
  href: 'https://twitter.com/sora_xor'
}, {
  title: 'Medium',
  icon: 'medium',
  href: 'https://medium.com/sora-xor'
}, {
  title: 'Linkedin',
  icon: 'linkedin',
  href: 'https://linkedin.com/company/sora-xor'
}, {
  title: 'Youtube',
  icon: 'youtube',
  href: 'https://youtube.com/sora_xor'
}, {
  title: 'Instagram',
  icon: 'instagram',
  href: 'https://instagram.com/sora_xor'
}, {
  title: 'Facebook',
  icon: 'facebook',
  href: 'https://facebook.com/SoraWorldOfficial'
}, {
  title: 'Reddit',
  icon: 'reddit',
  href: 'https://www.reddit.com/r/SORA/'
}, {
  title: 'GitHub',
  icon: 'github',
  href: 'https://github.com/sora-xor'
}, {
  title: 'Discord',
  icon: 'discord',
  href: 'https://t.co/AKzRnWBGzz'
}, {
  title: 'Telegram',
  icon: 'telegram',
  href: 'https://t.me/sora_xor'
}]
</script>

<template>
  <ul>
    <li v-for="link in socials">
      <NuxtLink :href="link.href" target="_blank" class="block py-m" data-cursor-show data-cursor-stick
        :data-cursor-text="link.title">
        <img :src="`/icons/${link.icon}.svg`" :alt="`${link.title} icon`">
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 67rem;
}

ul,
li {
  padding: 0;
  margin: 0;
}

li {
  flex: 1;
}

img {
  width: 2.4rem;
  height: 2.4rem;
  margin: auto;
}
</style>