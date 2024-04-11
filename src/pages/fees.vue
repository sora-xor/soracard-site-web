<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Fees'
const ogImage = `${baseUrl}/fees/og.jpg`
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  ogImage,
  ogImageSecureUrl: ogImage,
  twitterImage: ogImage,
})

const nav = [
  { title: 'IBAN / SEPA Transaction Fees', href: '#1' },
  { title: 'FX Conversion Fees', href: '#2' },
  { title: 'Card and Account Fees', href: '#3' },
  { title: 'Limits', href: '#4' },
]
</script>

<template>
  <section class="container w my-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="nav" />
    <div class="rich">
      <h1 class="mb-3xs">Fees</h1>
      <p class="mt-3xs">May 8, 2023</p>
      <hr>
      <p>
        <strong>The first 5000 applicants will not pay yearly or monthly fees for the first 2 years.</strong>
        Only fees according to their usage will be charged to their account.*
      </p>
      <p class="text-s">* Usage fees are necessary to cover the costs of banking and card service partners, who
        handle financial transactions. These fees are a financially sustainable way for SORA to provide its services
        while
        ensuring the privacy and security of users. It's important to remember that if a product is free, you are likely
        the
        product being sold. With SORA, you can trust that your personal information is not being used for profit. So,
        paying
        the usage fees is a small price to pay for the peace of mind that comes with using a secure and reliable
        platform
        like SORA Card.</p>
      <h2 id="1">IBAN/SEPA Transaction Fees</h2>
      <table>
        <thead>
          <tr>
            <th style="width:50%">Action</th>
            <th style="width:25%">Amount</th>
            <th style="width:25%">Recurrence/Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account to account transfer fee (interledger)</td>
            <td>€0.22</td>
            <td>per transaction</td>
          </tr>
          <tr>
            <td>Incoming/outgoing transaction fee (SEPA, SEPA instant)</td>
            <td>0.1% + €0.40</td>
            <td>per transaction</td>
          </tr>
          <tr>
            <td>BACS, CHAPS, ACH</td>
            <td>0.1% + €1.10</td>
            <td>per transaction</td>
          </tr>
          <tr>
            <td>SWIFT</td>
            <td>0.1% + €20</td>
            <td>per transaction + % of value</td>
          </tr>
          <tr>
            <td>IBAN/ledger load fee (card transfer)</td>
            <td>€0</td>
            <td>per transaction</td>
          </tr>
        </tbody>
      </table>
      <h2 id="2">FX Conversion Fees</h2>

      <table>
        <thead>
          <tr>
            <th style="width:50%">Action</th>
            <th style="width:25%">Amount</th>
            <th style="width:25%">Recurrence/Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FX</td>
            <td>T1&nbsp;0.7%, T2&nbsp;1%, T3&nbsp;2.2%, T4 per&nbsp;case</td>
            <td>of transaction volume, currency dependent</td>
          </tr>
        </tbody>
      </table>
      <h2 id="3">Card and Account Fees</h2>

      <table>
        <thead>
          <tr>
            <th style="width:50%">Action</th>
            <th style="width:25%">Amount</th>
            <th style="width:25%">Recurrence/Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account/card top-up with 3rd party debit or credit card through ecommerce transaction</td>
            <td>2.5%</td>
            <td>of transaction volume + interchange + card scheme costs</td>
          </tr>
          <tr>
            <td>Account/card top-up with 3rd party debit or credit card through softPOS transaction—card present</td>
            <td>1.5%</td>
            <td>of transaction volume + interchange + card scheme costs</td>
          </tr>
          <tr>
            <td>Inactivity cost (negative interest rate on Euro IBANs)</td>
            <td>0.06%</td>
            <td>monthly, included in account fee for balances under €1,500 only</td>
          </tr>
          <tr>
            <td style="border-bottom:0">POS/online purchases</td>
            <td>10 complementary purchases</td>
            <td>per month;</td>
          </tr>
          <tr>
            <td></td>
            <td>€0.22</td>
            <td>per purchase after that</td>
          </tr>
          <tr>
            <td style="border-bottom:0">Virtual card</td>
            <td>first card is paid by SORA community;</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>additional cards paid by user €2</td>
            <td>per virtual card issued</td>
          </tr>
          <tr>
            <td>Monthly card maintenance fee</td>
            <td>€0 / €0.99 if the card is not used at least 3x per month</td>
            <td>paid by SORA community for the first 5000 users</td>
          </tr>
          <tr>
            <td>Membership fee</td>
            <td>€0</td>
            <td>offered by the SORA community</td>
          </tr>
          <tr>
            <td>3D secure fee</td>
            <td>€0.18</td>
            <td>per attempt</td>
          </tr>
          <tr>
            <td>ATM domestic</td>
            <td>€1.20 + 0.5%</td>
            <td>per transaction, additional costs may apply depending on the ATM provider</td>
          </tr>
          <tr>
            <td>ATM EEA+UK</td>
            <td>€1.20 + 0.8%</td>
            <td>per transaction, additional costs may apply depending on the ATM provider</td>
          </tr>
          <tr>
            <td>ATM international</td>
            <td>€1.20 + 3%</td>
            <td>per transaction, additional costs may apply depending on the ATM provider</td>
          </tr>
          <tr>
            <td>ATM operations</td>
            <td>€0</td>
            <td>plus costs if any (decline etc.)</td>
          </tr>
          <tr>
            <td>Foreign currency purchases / ATM</td>
            <td>€0.65 + 0.2%</td>
            <td>plus FX costs if any</td>
          </tr>
          <tr>
            <td>ATM balance inquiry</td>
            <td>€0.65</td>
            <td>plus costs if any</td>
          </tr>
          <tr>
            <td>Load fee (card, direct)</td>
            <td>0%</td>
            <td>of load amount + bank transfer fees</td>
          </tr>
          <tr>
            <td>Exchange fee XOR&lt;&gt;EUR</td>
            <td>1.95%</td>
            <td>of load amount + bank transfer fees</td>
          </tr>
        </tbody>
      </table>
      <h2 id="4">Limits</h2>
      <table>
        <thead>
          <tr>
            <th style="width:50%">Action</th>
            <th style="width:25%">Amount</th>
            <th style="width:25%">Recurrence/Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cash Withdrawl Limit</td>
            <td>EUR 5,000*<br> <small>* Will be higher for upcoming higher tier card programs. ATM limits need to be
                observed.</small> </td>
            <td>per day</td>
          </tr>
          <tr>
            <td>Spending Limit</td>
            <td>EUR 25,000*<br> <small>* Will be higher for upcoming higher tier card programs.</small> </td>
            <td>per day</td>
          </tr>
          <tr>
            <td>Daily Top-Up Limit</td>
            <td>EUR 30,000</td>
            <td>per day</td>
          </tr>
          <tr>
            <td>Monthly Top-Up Limit</td>
            <td>EUR 30,000</td>
            <td>per month</td>
          </tr>
          <tr>
            <td>Annual Top-Up Limit</td>
            <td>EUR 360,000</td>
            <td>per year</td>
          </tr>
        </tbody>
      </table>
      <p>Disclaimer: all fees are subject to change.</p>
      <p>
        Refer to
        <a href="https://medium.com/sora-xor/sora-card-phase-1-everything-you-need-to-know-d00a3df19a1a"
          target="_blank">this article</a>
        for further details on Fees and Limits.
      </p>
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