<script setup lang="ts">
import type { Link } from '~/lib/constants/types'

const { icon, title, description, button } = defineProps<{
  icon: string,
  title: string,
  description: string
  button: Link
}>()
</script>

<template>
  <div class="tile rounded bg-light1 p-l text-center">
    <div class="image pt-l pb-xl">
      <img :src="icon" :alt="icon" />
    </div>
    <h2 class="text-l mb-xs">{{ title }}</h2>
    <p class="mb-m text-s">{{ description }}</p>
    <Button v-bind="button" class="text-s" />
  </div>
</template>

<style scoped>
.tile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}

.image img {
  max-width: 9rem;
  width: 100%;
  aspect-ratio: 1/1;
}
</style>