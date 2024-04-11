<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Earn farming and staking rewards'
const ogImage = `${baseUrl}/earn/og.jpg`
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
    <span class="px-xs py-3xs bg-light1 rounded text-s">Earn</span>
    <h1 class="my-m">
      Earn farming and staking rewards
    </h1>
    <p class="text-l rich">
      SORA Card offers a seamless integration with the Polkaswap DEX and Demeter farming platform, allowing users to
      easily earn multiple levels of rewards.
    </p>
    <hr>
    <p>
      By adding liquidity to an existing pool or creating a new one, users can earn built-in liquidity provider and
      strategic farming rewards in Polkaswap. Additionally, staking LP tokens can provide 2x rewards through Demeter
      Farming. Users can also farm in multiple pools using the same LP tokens with Demeter.
    </p>
    <p class="text-s">
      The Demeter Farming platform is a novel concept, providing Farming-as-a-Service that benefits not only users
      seeking
      to earn rewards on their tokens but also Web3 projects issuing tokens, as it offers an out-of-the-box solution for
      implementing yield farming.
    </p>
    <img src="/earn/demeter.jpg" alt="Demeter image" style="max-width: 30rem; aspect-ratio: 1/1;">
    <hr>
    <p class="text-s">
      Referring friends to the SORA network also earns rewards, with users receiving 10% of their referrals' network
      fees
      from transactions made on the network. Referrals are integrated in the SORA Wallet mobile app as well as in the
      Polkaswap DEX web app.
    </p>
  </section>
</template>