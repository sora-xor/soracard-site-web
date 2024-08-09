<script setup lang="ts">
const { items, activeItem } = defineProps<{
  items: {
    title: string
    value: string
  }[]
  activeItem: string
}>()

defineEmits<{ 'toggle': [value: string] }>()
</script>

<template>
  <div class="flex jcc text-s bold tabs rounded bg-dark1 p-3xs light1">
    <button v-for="item in items" @click="$emit('toggle', item.value)"
      class="px-xs py-xxs rounded hover-trigger text-center"
      :class="{ 'bg-light1': item.value === activeItem, 'dark2': item.value === activeItem }">
      <span :class="{ 'hover-underline': item.value !== activeItem }">{{ item.title }}</span>
    </button>
  </div>
</template>

<style scoped>
.tabs {
  width: fit-content;
  gap: var(--space-3xs)
}
</style>