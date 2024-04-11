<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Restricted countries'
const ogImage = `${baseUrl}/blacklist/og.jpg`
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
    <span class="px-xs py-3xs bg-light1 rounded text-s">Restricted countries</span>
    <h1 class="text-xl my-m">
      Regretfully, residents of the following jurisdictions are not eligible to apply for SORA Card at this time
    </h1>
    <p class="text-l">
      High-Risk Jurisdictions subject to a Call for Action (i.e. "blacklist")
    </p>
    <hr>
    <ul>
      <li>Afghanistan</li>
      <li>Albania</li>
      <li>Algeria</li>
      <li>Bangladesh</li>
      <li>Barbados</li>
      <li>Belarus</li>
      <li>Bolivia</li>
      <li>Burkina Faso</li>
      <li>Cambodia</li>
      <li>Cayman Islands</li>
      <li>Central African Republic</li>
      <li>Congo</li>
      <li>China</li>
      <li>Cuba</li>
      <li>Eritrea</li>
      <li>Ethiopia</li>
      <li>Gibraltar</li>
      <li>Ghana</li>
      <li>Haiti</li>
      <li>Hong Kong</li>
      <li>Iran</li>
      <li>Iraq</li>
      <li>Ivory Coast</li>
      <li>Jamaica</li>
      <li>Jordan</li>
      <li>Korea</li>
      <li>Kyrgyzstan</li>
      <li>Lebanon</li>
      <li>Liberia</li>
      <li>Libya</li>
      <li>Macedonia</li>
      <li>Mali</li>
      <li>Mozambique</li>
      <li>Myanmar</li>
      <li>Nepal</li>
      <li>Nigeria</li>
      <li>Panama</li>
      <li>Philippines</li>
      <li>Russian Federation</li>
      <li>Sudan</li>
      <li>Senegal</li>
      <li>Somalia</li>
      <li>South Africa</li>
      <li>South Sudan</li>
      <li>Syria</li>
      <li>Tanzania</li>
      <li>Turkey</li>
      <li>Thailand</li>
      <li>Uganda</li>
      <li>United Arab Emirates</li>
      <li>United States</li>
      <li>Venezuela</li>
      <li>Vietnam</li>
      <li>Yemen</li>
      <li>Zimbabwe</li>
    </ul>
    <hr>
    <p>
      If you are a resident of any of the above-mentioned jurisdictions, please do not attempt to undergo the KYC
      process.
      Instead, please reach out to the SORA community through Telegram or Discord.
    </p>
  </section>
</template>