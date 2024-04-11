<script setup lang="ts">
const features = [
  'Full ownership over your crypto',
  'Easy access to payments and DeFi',
  'Real-time exchange rate when buying/selling crypto',
  'Fiat access to major blockchains with true interoperability*'
]
</script>

<template>
  <section class="w grid pb-xxl">
    <div class="image rounded" data-aos="fade-up">
      <img src="/home/features.jpg" alt="Hand holding SORA Card" />
    </div>
    <div class="text bg-light1 rounded" data-aos="fade-up" data-aos-delay="100">
      <h2 class="mb-l">The ultimate all-in-one self-custodial crypto + neobanking-inspired solution</h2>
      <ul class="mb-l">
        <li v-for="feature in features" class="pl-l pb-xs">{{ feature }}</li>
      </ul>
      <div class="text-xs">
        *Currently SORA network with a bridge to Ethereum, Polkadot and Kusama, soon other EVM networks and Bitcoin
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  gap: var(--space-xs);
}

.text {
  padding: var(--space-m) var(--space-s) var(--space-s);
}

.text ul {
  padding: 0;
}

.text li {
  list-style: none;
  position: relative;
}

.text li::before {
  content: '';
  position: absolute;
  top: -0.2rem;
  left: 0;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: var(--color-accent);
  background-image: url('/icons/check.svg');
  background-repeat: no-repeat;
  background-size: 2rem 2rem;
  background-position: 50% 50%;
}

.image {
  overflow: hidden;
  position: relative;
}

.image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 959px) {
  .image {
    aspect-ratio: 1/1;
  }
}

@media (min-width: 640px) {
  .grid {
    gap: var(--space-s);
  }

  .text {
    padding: var(--space-xl) var(--space-xl) var(--space-l);
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: 1fr 2fr;
    padding-top: var(--space-xxl);
  }
}
</style>