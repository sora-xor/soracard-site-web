<script setup lang="ts">
import nav from '@/lib/constants/navigation'

const isModalOpen = useApplyModalState()
</script>

<template>
  <nav class="nav">
    <div v-for="group in nav">
      <div class="py-3xs bold">{{ group.title }}</div>
      <ul>
        <li v-for="(item, i) in group.links" :style="`--delay: ${i * 0.05}s`">
          <button v-if="(typeof item === 'string')" class="link hover-trigger py-3xs" @click="isModalOpen = true">
            <span class="hover-underline">Apply</span>
          </button>
          <NuxtLink v-else :href="item.href" class="link hover-trigger py-3xs">
            <span class="hover-underline">{{ item.title }}</span>
            <img v-if="item.isExternal" src="/icons/external.svg" alt="external link icon" class="external">
            <span v-if="item.label" class="label bold rounded">{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: grid;
  gap: var(--space-s) var(--space-m);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-top: var(--space-m);
  padding-bottom: var(--space-m);
  place-items: start;
}

ul {
  list-style: none;
}

ul,
li {
  padding: 0;
  margin: 0;
}

.link {
  display: flex;
  gap: 0.4em;
  justify-content: flex-start;
  align-items: center;
}

.external {
  width: 1em;
  height: 1em;
  object-fit: contain;
  opacity: 0.5;
}

.label {
  text-transform: uppercase;
  padding: 1px 4px 0 4px;
  display: inline-flex;
  font-size: 1rem;
  margin-right: -1.5em;
  border: 1px solid var(--color-accent);
}

@media (min-width: 960px) {
  .nav {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding-top: var(--space-xl);
  }
}
</style>