<script setup lang="ts">
const { error } = defineProps<{
  error: {
    url: string
    statusCode: number
    statusMessage: string
    message: string
    description: string
    data: any
  }
}>()
</script>

<template>
  <Header />
  <section class="content w text-center py-3xl">
    <h1 class="text-3xl mb-s break-word" data-aos="fade-up">Error {{ error.statusCode }}</h1>
    <p class="text-l mb-l" data-aos="fade-up" data-aos-delay="100">
      {{ error.statusMessage }}
    </p>
    <Button href="/" title="Homepage" large data-aos="fade-up" data-aos-delay="200" />
  </section>
  <Footer />
</template>

<style scoped>
main {
  min-height: 100vh;
  display: grid;
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>