<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Technology'
const ogImage = `${baseUrl}/technology/og.jpg`
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
    <span class="px-xs py-3xs bg-light1 rounded text-s">Technology</span>
    <h1 class="text-xl my-m">
      We believe in a better, more efficient blockchain network for all
    </h1>
    <p class="text-l">
      SORA is built on <a href="https://substrate.io/" target="_blank">Parity Substrate</a>, a framework that scales
      more
      efficiently than
      Ethereum, resulting in lower fees. With SORA's NPoS (Nominated Proof-of-Stake) mechanism, validators play a
      crucial
      role in accepting or rejecting transactions.
    </p>
    <hr>
    <p>
      Creating an account on SORA is free and limitless, without the need for KYC or a minimum balance. SORA's bridging
      pallet offers seamless interoperability between the entire <a href="https://polkadot.network/"
        target="_blank">Polkadot</a> and <a href="https://kusama.network/" target="_blank">Kusama</a> ecosystems, paving
      the way for direct and secure interactions between
      networks.
    </p>
    <img src="/about/polkaswap.jpg" alt="Polkaswap app on desktop & mobile screens" style="aspect-ratio: 16/10;">
    <p>
      SORA empowers decentralized applications with tools for digital assets, including atomic token swaps, token
      bridging, and programmatic asset rules.
    </p>
    <p>
      One of the DeFi applications built on the SORA network is <a href="https://polkaswap.io/"
        target="_blank">Polkaswap</a>. Polkaswap is a non-custodial AMM DEX exclusively designed for the Polkadot
      ecosystem and its interoperable future. Polkaswap offers boundless liquidity through its one-of-a-kind <a
        href="https://twitter.com/soramitsu_co/status/1654425644296536067" target="_blank">Aggregate Liquidity
        Technology
        (ALT)</a>, with security, and convenience, facilitating immediate asset exchanges with ease and flexibility.
    </p>
    <p>
      The Polkadot architecture offers virtually limitless composability between blockchains, further expanding
      Polkaswap's capabilities.
    </p>
    <hr>
    <div class="text-center">
      <Button href="https://wiki.sora.org/" title="Learn more at wiki.sora.org" class="text-s" target="_blank" />
    </div>
  </section>
</template>