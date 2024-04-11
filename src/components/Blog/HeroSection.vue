<script setup lang="ts">
import { type BlogArticleMeta } from '@/lib/constants/types'
const { title, description, date, image } = defineProps<BlogArticleMeta>()
</script>

<template>
  <section class="hero relative text-center pt-3xl pb-xl">
    <div class="w">
      <h1 class="mb-s" data-aos="fade-up">
        {{ title }}
      </h1>
      <p class="text-l mb-m mx-auto" data-aos="fade-up" data-aos-delay="100">
        {{ description }}
      </p>
      <p class="date text-s color-dark2 mb-l mx-auto" data-aos="fade-up" data-aos-delay="200">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path
            d="M6 5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V5Z"
            fill="currentColor" />
          <path
            d="M5.5 6.06301C4.63739 6.28503 4 7.06808 4 8V14C4 15.1046 4.89543 16 6 16H14C15.1046 16 16 15.1046 16 14V8C16 7.06808 15.3626 6.28503 14.5 6.06301V7C14.5 7.82843 13.8284 8.5 13 8.5C12.1716 8.5 11.5 7.82843 11.5 7V6H8.5V7C8.5 7.82843 7.82843 8.5 7 8.5C6.17157 8.5 5.5 7.82843 5.5 7V6.06301Z"
            fill="currentColor" />
          <path
            d="M13 4C12.4477 4 12 4.44772 12 5V7C12 7.55228 12.4477 8 13 8C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4Z"
            fill="currentColor" />
        </svg>

        {{ (new Date(date)).toDateString() }}
      </p>
      <img :src="image" alt="Article cover image" class="rounded" data-aos="fade-up" data-aos-delay="300">
    </div>
  </section>
</template>

<style scoped>
.hero::before {
  content: '';
  background-color: var(--color-light2);
  position: absolute;
  top: 0;
  right: 0;
  bottom: calc(min(100vw, 128rem) * 0.26 + var(--space-xl));
  left: 0;
  z-index: -1;
}

.hero p {
  max-width: 90rem;
}

.date {
  display: flex;
  gap: var(--space-xxs);
  align-items: center;
  justify-content: center;
}

.hero img {
  aspect-ratio: 16/9;
  object-fit: cover;
  background-color: var(--color-dark2);
}

.icon {
  width: 2.4rem;
}
</style>