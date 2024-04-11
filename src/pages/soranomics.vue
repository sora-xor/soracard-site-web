<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — SORAnomics'
const ogImage = `${baseUrl}/soranomics/og.jpg`
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  ogImage,
  ogImageSecureUrl: ogImage,
  twitterImage: ogImage,
})
</script>

<template>
  <section class="rich px-s py-3xl mx-auto" data-aos="fade-up">
    <span class="px-xs py-3xs bg-light1 rounded text-s">SORAnomics</span>
    <h1 class="text-xl my-m">
      We believe inflation is beneficial only when new goods or services are created using the newly printed money
    </h1>
    <p class="text-l">
      That's why we're building a decentralized and democratic economic system that empowers producers to create new
      goods
      and services, without discriminating against anyone.
    </p>
    <hr>
    <p>
      With SORA, financial inclusion for all is possible, and managing day-to-day finances becomes a breeze. Our
      on-chain
      governance system is powered by the <a href="https://wiki.sora.org/tokenomics" target="_blank">XOR token</a>,
      which
      allows producers to propose funding for their projects. Token
      holders then vote on how to allocate tokens, ensuring that only the best goods and services are created.
    </p>
    <p>
      To build the SORA economy, producers should accept XOR for their goods and services, creating a sustainable and
      thriving economic ecosystem.
    </p>
    <figure class="mt-xl mb-l">
      <YoutubeVideo id="KEfdlctvHH4" cover="/soranomics/werner.jpg" class="mb-s" />
      <figcaption class="text-center text-s">
        Professor Richard Werner presenting at the SORA Economic Forum, June 22, 2021
      </figcaption>
    </figure>
    <p>
      Our mechanism is based on the Disaggregated Quantity Theory of Credit, which states that a currency can be
      inflated
      in three ways: for <strong>consumption</strong>, for <strong>speculation</strong>, or for
      <strong>production</strong>. Inflating a currency for consumption or speculation leads to economic instability,
      but
      creating money for production can drive predictable economic growth, advancing human development and technology.
    </p>
    <p>
      SORA's tokenomics rely on a <a href="https://wiki.sora.org/token-bonding-curve" target="_blank">Token Bonding
        Curve</a>, which helps mitigate the boom-bust valuations that plague many cryptocurrencies. This innovative
      approach manages the challenges of not having an elastic supply of capital, allowing for steady and sustainable
      growth.
    </p>
    <p>
      SORA Card itself is an example of how on-chain democratic governance empowers producers with the funding they need
      to create new goods and services. By utilizing this revolutionary system, projects can access the resources they
      need to build the tools that will drive the future of finance. This process ensures that projects are created with
      the needs of the community in mind, and that everyone has an equal say in the direction that these projects take.
      With SORA Card, users can take advantage of this new financial infrastructure to access decentralized and
      non-custodial crypto solutions, all while maintaining control over their data and assets.
    </p>
    <hr>
    <p class="text-center">Join the SORA community and be part of a movement to create a more equitable and prosperous
      world for all.</p>
    <hr>
    <div class="text-center">
      <Button href="https://soranomics.com/" title="Learn more at soranomics.com" class="text-s" target="_blank" />
    </div>
  </section>
</template>