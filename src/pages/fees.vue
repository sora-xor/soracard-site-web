<script setup lang="ts">
import en from '~/lib/lang/en/fees.json'
import es from '~/lib/lang/es/fees.json'

const { baseUrl } = useRuntimeConfig().public

const { t, tm } = useI18n({
  messages: { en, es },
})

type AdoptionGroup = 'earlyAdopters' | 'afterACQIntegration'

const adoptionGroup = ref<AdoptionGroup>('earlyAdopters')

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

const nav = computed(() => tm(adoptionGroup.value).map((item, i) => ({
  title: item.title,
  href: `#${i + 1}`,
}))
)

interface Item {
  title: string
  table: {
    action: string | null
    price1: string | { value: string, note: string }
    price2: string | { value: string, note: string }
    period: string
  }[]
}

const toggleTab = (e: string) => adoptionGroup.value = e as AdoptionGroup
</script>

<template>
  <section class="w mt-3xl mb-xl mx-auto rich text-center">
    <span class="px-xs py-3xs bg-light1 rounded text-s" data-aos="fade-up">
      {{ t('date') }}
    </span>
    <h1 class="my-s" data-aos="fade-up" data-aos-delay="50">
      {{ t('headline') }}
    </h1>
    <p class="mb-s" data-aos="fade-up" data-aos-delay="100">
      <strong>{{ t('lead.accent') }}</strong>
      {{ t('lead.regular') }}
    </p>
    <p class="text-s" data-aos="fade-up" data-aos-delay="150">
      {{ t('lead.note') }}
    </p>
  </section>

  <div class="text-center px-xs" data-aos="fade-up" data-aos-delay="200">
    <Tabs :items="[
        { title: t('adoptionGroups.earlyAdopters'), value: 'earlyAdopters' },
        { title: t('adoptionGroups.afterACQIntegration'), value: 'afterACQIntegration' },
      ]" :activeItem="adoptionGroup" @toggle="toggleTab" class="mb-l mx-auto" />
  </div>

  <hr>

  <section class="container w mb-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="nav" />
    <div class="rich">
      <template v-for="(item, i) in (tm(adoptionGroup) as Item[])">
        <h2 :id="`${i + 1}`">{{ item.title }}</h2>
        <table>
          <thead>
            <tr>
              <th style="width:44%">{{ t('action') }}</th>
              <th style="width:17%">{{ t('price1') }}</th>
              <th style="width:17%">{{ t('price2') }}</th>
              <th style="width:17%">{{ t('period') }}</th>
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

      <p>
        {{ t('disclaimer') }}
      </p>
      <p>
        <RichText :content="tm('reference')" />
      </p>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: grid;
  gap: var(--space-xl);
  margin-top: var(--space-xs);
}

@media (min-width: 960px) {
  .container {
    grid-template-columns: 1fr 3fr;
    gap: var(--space-xxl);
    place-items: start stretch;
    margin-top: var(--space-xl);
  }
}
</style>