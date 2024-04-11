<script setup lang="ts">
const { open } = defineProps<{ open: boolean }>()
</script>

<template>
  <button class="burger" :class="{ open }" title="Menu"></button>
</template>

<style scoped>
.burger {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  text-align: inherit;
  font: inherit;
  border-radius: 0;
  appearance: none;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  position: relative;
  color: inherit;
}

.burger::before,
.burger::after {
  content: '';
  height: 0.3rem;
  width: 100%;
  margin: -0.15rem 0;
  position: absolute;
  top: 50%;
  transition: transform .3s ease;
  background-color: currentColor;
  border-radius: 1rem;
}

.burger::before {
  transform: translate3d(0, -0.75rem, 0);
}

.burger::after {
  transform: translate3d(0, 0.75rem, 0);
}

.open.burger::before {
  transform: rotate(-45deg);
}

.open.burger::after {
  transform: rotate(-135deg);
}
</style>