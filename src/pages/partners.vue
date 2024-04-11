<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Partners'
const ogImage = `${baseUrl}/partners/og.jpg`
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
    <span class="px-xs py-3xs bg-light1 rounded text-s">Partners</span>
    <h1 class="text-xl my-m">
      We believe in the power of partnerships to revolutionize our world economy
    </h1>
    <p class="text-l">
      In the world of blockchain, collaboration is key, and SORA has embraced this philosophy through a variety of
      partnerships from top institutions to anonymous community members from around the globe.
    </p>
    <hr>
    <p>
      Partnerships are at the heart of SORA's mission to create a more efficient blockchain network for all.
      <a href="https://soramitsu.co.jp/" target="_blank">SORAMITSU</a>,
      <a href="https://ceresblockchain.solutions/" target="_blank">Ceres</a>,
      <a href="https://linkedin.com/company/abed-group/" target="_blank">Abed Group</a>,
      <a href="https://drinknoir.com/" target="_blank">Noir</a>, and
      <a href="https://rmrk.app/" target="_blank">RMRK</a> are just a few of the organizations that SORA has
      collaborated
      with to build a decentralized ecosystem that empowers users. These partnerships have resulted in innovative
      solutions such as the
      <a href="https://polkaswap.io/" target="_blank">Polkaswap</a> DEX, the
      <a href="https://farming.deotoken.io/" target="_blank">Demeter</a> farming platform, the
      <a href="https://hermes-dao.io/" target="_blank">Hermes DAO</a> decentralized fund for investments, the
      <a href="https://deoarena.io/" target="_blank">DEO Arena</a> Play-to-Earn game,
      <a href="https://adar.com/" target="_blank">ADAR</a>, an advanced digital asset routing platform to simplify
      recurring payments,
      <a href="https://noir.digital/" target="_blank">noir.digital</a>, the world’s first phygital wine, and now SORA
      Card, all built on the SORA network.
    </p>
    <figure class="mt-xl mb-l">
      <YoutubeVideo id="058n40NpfqM" cover="/partners/video.jpg" class="mb-s" />
      <figcaption class="text-center text-s">
        Build with SORA
      </figcaption>
    </figure>
    <p>
      By partnering with organizations that share our vision of a more equitable and prosperous world, SORA is helping
      to
      shape the future of blockchain technology. Through our comprehensive tutorial and RFP process, SORA is also
      encouraging community involvement in the development of the network, ensuring that we remain user-focused and
      community-driven.
    </p>
    <hr>
    <p class="text-center">
      Join the SORA community and be part of the movement to revolutionize our economy with blockchain technology. As a
      partner, you will have the opportunity to contribute to the growth and development of the network, and be a part
      of
      a community dedicated to building a better future for all.
    </p>
    <hr>
    <div class="text-center">
      <Button
        href="https://medium.com/sora-xor/updated-sora-and-polkaswap-decentralised-development-tutorial-17be25ec327b"
        title="Learn more" class="text-s" target="_blank" />
    </div>
  </section>
</template>