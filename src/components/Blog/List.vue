<script setup lang="ts">
const { limit, accent } = defineProps<{ limit?: number, accent?: boolean }>()
const { locale } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="container w pt-l pb-3xl">
    <ContentList :query="{ sort: [{ 'date': -1 }], limit, locale }" v-slot="{ list }" path="/blog">
      <BlogTile v-for="(article, i) in list" :key="article._path" :title="article.title || 'Title is missing'" :date="(new Date(article.date)).toLocaleDateString(locale, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })" :href="localePath(article._path)" :description="article.description || 'Description is missing'"
        :image="article.image" :accented="accent && !i" />
    </ContentList>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  gap: var(--space-l) var(--space-s);
  position: relative;
}

.container::before {
  content: '';
  position: absolute;
  top: 0;
  right: var(--space-xs);
  left: var(--space-xs);
  height: 1px;
  background-color: var(--color-dark1);
  opacity: 0.2;
}

@media (min-width: 640px) {
  .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .container::before {
    right: var(--space-m);
    left: var(--space-m);
  }
}

@media (min-width: 960px) {
  .container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>