<script setup lang="ts">
type Section = {
  title: string
  table: {
    action: string | null
    price1: string | { value: string, note: string }
    price2: string | { value: string, note: string }
    period: string
  }[]
}

type LimitsTable = {
  action: string
  limit: string
  period: string
}[]

type Fees = {
  headline: string
  date: string
  lead: {
    accent: string
    regular: string
    note: string
  }
  action: string
  price1: string
  price2: string
  period: string
  limit: string
  altFeesLink: {
    title: string
    href: string
  }
  fees: Section[]
  limits: {
    title: string
    table: LimitsTable
  }
  limitsPDF: string
  disclaimer: string
  reference: string
  notes: string[]
}

const { messages } = defineProps<{ messages: { en: Fees, es: Fees } }>()

const { baseUrl } = useRuntimeConfig().public

const { t, tm } = useI18n({
  messages
})

const localePath = useLocalePath()

useSeoMeta({
  title: t('seoMeta.title'),
  ogTitle: t('seoMeta.title'),
  twitterTitle: t('seoMeta.title'),
  description: t('seoMeta.description'),
  twitterDescription: t('seoMeta.description'),
  keywords: t('seoMeta.keywords'),
  ogDescription: t('seoMeta.description'),
  ogImage: `${baseUrl}/${t('seoMeta.ogImage')}`,
  twitterImage: `${baseUrl}/${t('seoMeta.ogImage')}`,
})

const nav = computed(() => {
  const nav = tm('fees').map((item, i) => ({
    title: item.title,
    href: `#fees${i + 1}`,
  }))
  nav.push({ title: t('limits.title'), href: '#limits' })
  return nav
}
)
</script>

<template>
  <section class="container w my-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="nav" />
    <div class="rich">
      <h1 class="mb-s">
        {{ t('headline') }}
      </h1>
      <span class="px-xs py-3xs bg-light1 rounded text-s">
        {{ t('date') }}
      </span>
      <hr>
      <p class="mb-m">
        <NuxtLink :to="localePath(t('altFeesLink.href'))">
          {{ t('altFeesLink.title') }}
        </NuxtLink>
      </p>
      <p class="mb-s">
        <strong>{{ t('lead.accent') }}</strong>
        {{ t('lead.regular') }}
      </p>
      <p class="text-s">
        {{ t('lead.note') }}
      </p>

      <template v-for="(item, i) in (tm('fees') as Section[])">
        <h2 :id="`fees${i + 1}`">{{ item.title }}</h2>
        <table>
          <thead>
            <tr>
              <th style="width:46%">{{ t('action') }}</th>
              <th style="width:18%">{{ t('price1') }}</th>
              <th style="width:18%">{{ t('price2') }}</th>
              <th style="width:18%">{{ t('period') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, j) in item.table" :key="j">
              <td :style="row.action ? '' : { borderTop: 0 }">{{ row.action || '' }}</td>
              <td v-if="typeof row.price1 === 'string'">{{ row.price1 }}</td>
              <td v-else>
                {{ row.price1.value }}<br>
                <small>{{ row.price1.note }}</small>
              </td>
              <td v-if="typeof row.price2 === 'string'">{{ row.price2 }}</td>
              <td v-else>
                {{ row.price2.value }}<br>
                <small>{{ row.price2.note }}</small>
              </td>
              <td>{{ row.period }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <h2 id="limits">{{ t('limits.title') }}</h2>
      <table style="display: table;">
        <thead>
          <tr>
            <th style="width:46%">{{ t('action') }}</th>
            <th style="width:27%">{{ t('limit') }}</th>
            <th style="width:27%">{{ t('period') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, j) in (tm('limits.table') as LimitsTable)" :key="j">
            <td :style="row.action ? '' : { borderTop: 0 }">{{ row.action || '' }}</td>
            <td v-if="typeof row.limit === 'string'">{{ row.limit }}</td>
            <td>{{ row.period }}</td>
          </tr>
        </tbody>
      </table>

      <p>
        <RichText :content="tm('limitsPDF')" />
      </p>
      <p>
        {{ t('disclaimer') }}
      </p>
      <p>
        <RichText :content="tm('reference')" />
      </p>

      <hr>

      <div class="rich text-s">
        <p v-for="note in tm('notes')">
          {{ note }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  gap: var(--space-s);
}

@media (min-width: 960px) {
  .container {
    grid-template-columns: 1fr 3fr;
    gap: var(--space-xxl);
    place-items: start stretch;
  }
}
</style>