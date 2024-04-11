<script setup lang="ts">
const { baseUrl } = useRuntimeConfig().public

const title = 'SORA Card | Value Freedom — Terms and Conditions'
const ogImage = `${baseUrl}/terms/og.jpg`
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  ogImage,
  ogImageSecureUrl: ogImage,
  twitterImage: ogImage,
})

const nav = [
  { title: 'General Terms of Use', href: "#0", bold: true },
  { title: 'Agreement to Terms', href: '#1' },
  { title: "Definitions", href: "#2" },
  { title: "The Service — SORA CARD Profile", href: "#3" },
  { title: "Profile Creation and Identification", href: "#4" },
  { title: "User Commitments", href: "#5" },
  { title: "Limitations of Liability", href: "#6" },
  { title: "Refund Policy", href: "#7" },
  { title: "Terminating Your Company Profile", href: "#8" },
  { title: "Third - Party Rights and Partners", href: "#9" },
  { title: "Intellectual Property Rights", href: "#10" },
  { title: "User Representations", href: "#11" },
  { title: "User Registration", href: "#12" },
  { title: "Prohibited Activities", href: "#13" },
  { title: "Site Management", href: "#14" },
  { title: "Privacy Policy", href: "#15" },
  { title: "Term and Termination", href: "#16" },
  { title: "Modifications and Interruptions", href: "#17" },
  { title: "Governing Law", href: "#18" },
  { title: "Dispute Resolution", href: "#19" },
  { title: "Corrections", href: "#20" },
  { title: "Disclaimer", href: "#21" },
  { title: "Limitations of Liability", href: "#22" },
  { title: "Indemnification", href: "#23" },
  { title: "Complaints Policy", href: "#24" },
  { title: "User Data", href: "#25" },
  { title: "Electronic Communications, Transactions, and Signatures", href: "#26" },
  { title: "Regulatory Matters", href: "#27" },
  { title: "Miscellaneous", href: "#28" },
  { title: "Contacts", href: "#29" },
  { title: "Linked Documents", href: "#30" },
  { title: "AML / CTF Policy", href: "#31", bold: true },
  { title: "Sweeping Clause", href: '#32', },
  { title: "Audience and Confidentiality", href: '#33', },
  { title: "Acronyms in Use", href: '#34', },
  { title: "Linked Documents", href: '#35', },
  { title: "Preamble", href: '#36', },
  { title: "Scope of Application", href: '#37', },
  { title: "Financial Action Task Force", href: '#38', },
  { title: "Definitions", href: '#39', },
  { title: "Personal Responsibility", href: '#40', },
  { title: "Professional Obligations", href: '#41', },
  { title: "Cooperation with the Licence Provider", href: '#42', },
  { title: "Ongoing Training, Recruitment and Awareness", href: '#43', },
  { title: "Document Retention", href: '#44', },
  { title: "Policy Compliance", href: '#45', },
  { title: "Information on Collection of Data", href: "#46", bold: true },
]
</script>

<template>
  <section class="container w my-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="nav" />
    <div class="rich">
      <h1 class="mb-3xs">Terms and Conditions</h1>
      <p class="mt-3xs">May 8, 2023</p>

      <h2 id="0">General Terms of Use</h2>

      <hr>

      <h3 id="1">Agreement to Terms</h3>

      <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of
        an entity (“You”, “Your”, or “User(s)”) and SORA BIOME, Sveta Sofia 8, Str., Floor 1, Office 101, 1000 Sofia,
        Bulgaria, company number: 207087270 (“SORA“, “we”, “us”, or “our”), concerning your access to and use of the
        soracard.com website (“Website”) as well as any other media form, media channel, mobile website or mobile
        application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by
        accessing the Site, you have read, understood, and agreed to be bound by these Terms of Use. IF YOU DO NOT AGREE
        WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE
        USE IMMEDIATELY.</p>
      <p>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby
        expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or
        modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by
        updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of
        each such change. It is your responsibility to periodically review these Terms of Use to stay informed of
        updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes
        in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are
        posted.</p>
      <p>The information provided on the Site is not intended for distribution to or use by any person or entity in any
        jurisdiction or country where such distribution or use would be contrary to law or regulation or which would
        subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who
        choose to access the Site from other locations do so on their own initiative and are solely responsible for
        compliance with local laws, if and to the extent local laws are applicable.</p>
      <p>The Site is intended for Users who are at least 18 years old. Persons under the age of 18 are not permitted to
        use or register for the Site.</p>

      <h3 id="2">Definitions</h3>

      <p>SORA CARD is a debit card issued by the Licence Provider (as defined below), which enables its Users to perform
        payment operations.</p>
      <p>SORA CARD Profile is a profile that a User receives upon successfully passing the KYC (»Know Your Customer«)
        screening procedure.</p>
      <p>Our partner businesses (who provide goods and services to SORA CARD users) are referred to as “Merchant” or
        “Merchants”.</p>
      <p>Our partner hereinafter referred to as “Licence Provider” who is the formal SORA CARD issuer and provides KYC
        and financial services to the Users is Unlimint EU Ltd (Company Number: HE 267043), a company that obtained a
        licence from the UK and EU and is authorised as an electronic money institution.</p>
      <p>The service SORA provides, as detailed below, is referred to as “the Service”.</p>

      <h3 id="3">The Service — SORA CARD Profile</h3>

      <p>These Terms of Use apply to your use of the services operated by SORA. The Service includes the use of Website
        and software to obtain a profile with SORA CARD (»SORA CARD Profile«) upon successfully passing the KYC
        procedure.</p>
      <p>The SORA CARD Profile allows Users to use services provided by SORA, its Merchants and Licence Provider.</p>
      <p>SORA is not accepting, handling, exchanging, or holding any fiat or crypto funds. All crypto-related
        transactions are processed by X Vienas UAB and GateHub UAB LTH.</p>
      <p>Payment of the Service shall be provided by the User in accordance with supported payment methods and in
        accordance with the Price List (available via: <a href="/fees" target="_blank">https://soracard.com/fees</a>).
      </p>
      <p>The Service Fee (as determined in the Price List) shall be paid by the User prior to SORA (either by itself or
        through the Merchants or Licence Provider) providing the Service.</p>
      <p>Information for the supported payment methods can be found on our Website.</p>

      <h3 id="4">Profile Creation and Identification</h3>

      <p>The User must first register and create a SORA CARD Profile with SORA, complete the KYC procedure and upload
        all requested documents. By accepting these Terms of Use, the User acknowledges and explicitly agrees that the
        KYC screening procedure will be performed by SORA and/or Licence Provider.</p>
      <p>The User shall provide including, but not limited to, the information and documents to SORA listed below:</p>
      <ul>
        <li>ID card or passport, which shall indicate at least name, surname, personal code, date of birth, issuing
          authority and date etc., and</li>
        <li>other information or documents, which SORA may request based on the individual circumstances and which would
          allow SORA to verify the User’s identity.</li>
      </ul>
      <p>The mandatory information to be provided to SORA in order to become a SORA CARD User is as follows:</p>
      <ul>
        <li>Full name (Name and Surname),</li>
        <li>Personal number and/or Date of birth,</li>
        <li>Residential address,</li>
        <li>Personal document details (document number, expiry date, issuing date, country and issuing government
          agency),</li>
        <li>Gender,</li>
        <li>Nationality,</li>
        <li>Proof of address,</li>
        <li>"Selfie" (picture of the User),</li>
        <li>Picture of both sides of the provided personal document with signature,</li>
        <li>E-mail address,</li>
        <li>Mobile-phone number (MSISDN).</li>
      </ul>
      <p>SORA collects personal information about the User and other information about the User through the mobile
        application or Website interface. During the collection of requested information, the User is required to enter
        their personal identification information and submit a photo of both sides of their identification document and
        a photo of the User taken while using the desktop/mobile application (»selfie«). A video conference is conducted
        to verify the information, using a third-party provider. The facial image of the User and the original of the
        identity document that is clearly shown by the User is recorded at the time of direct video streaming. By
        accepting these Terms of Use, the User acknowledges and explicitly agrees that the personal data of the User
        might be shared with the Licence Provider in order to enable the Licence Provider to perform KYC screening
        procedure.</p>
      <p>After successfully completing the KYC process (confirmed by us and the Licence Provider), the User becomes a
        verified User, and a unique identification number (User ID) is assigned to the User. A SORA CARD Profile is
        created for the User.</p>

      <h3 id="5">User Commitments</h3>

      <p>In exchange for our provision of the Service, we require you to make the following commitments to us as a SORA
        CARD User:</p>
      <ul>
        <li>You must not create a SORA CARD Profile if we have previously deactivated your account for violating the
          applicable law or for breaching any of our policies;</li>
        <li>If you choose, or are provided with, a username, password or other piece of information as part of our
          security procedures, you must treat such information as confidential and must not disclose these details to a
          third-party; and</li>
        <li>You must be at least 18 years old. The Service is not intended for use by persons under the age of 18.</li>
      </ul>

      <h3 id="6">Limitations of Liability</h3>

      <p>You acknowledge that the Service is being made available to you and that SORA makes no representations or
        warranties, express or implied, regarding the Service. All representations, undertakings, warranties, terms and
        conditions, whether expressed or implied by statute, common law or otherwise are excluded to the fullest extent
        permitted by the applicable law.</p>
      <p>Except as provided in these User Terms and Conditions, SORA shall not be liable to you for any claims
        whatsoever including but not limited to those arising from loss of profits, business, revenue, goodwill,
        anticipated savings and/or any other indirect, special or consequential loss whether arising under contract,
        negligence or otherwise out of or in connection with the Service. In particular, SORA accepts no responsibility
        or liability for the acts or omissions of participating Merchants and/or Licence Providers which operate
        independently of SORA. SORA neither excludes nor limits its liability for death or personal injury caused by its
        own negligence or any other liability the exclusion or limitation of which is expressly prohibited by law.</p>
      <p>If the User chooses to use its SORA CARD Profile to use services of participating Merchants or Licence
        Providers, a special set of Terms and Conditions of participating Merchants and Licence Providers shall apply
        and shall be accepted by the User.</p>

      <h3 id="7">Refund Policy</h3>

      <p>Once the User initiates the KYC Procedure, no refund is possible as the Service is already provided.</p>
      <p>The creation of the SORA CARD Profile in no way implies that the User is eligible for any of the services of
        participating Merchants or other third-party service providers.</p>
      <p>If the User does not initiate the KYC procedure, the User may submit an email request to <a
          href="mailto:support@soracard.com">support@soracard.com</a> with a confirmation that he/she did not complete
        the KYC procedure. The User will receive a full refund within 30 business days.</p>

      <h3 id="8">Terminating Your Company Profile</h3>

      <p>SORA reserves the right to terminate the Service and/or your use of the Service at our discretion and without
        notice.</p>

      <h3 id="9">Third-Party Rights and Partners</h3>

      <p>SORA collaborates with its third-party partners in order to provide Services to its customers. SORA’s main
        business partners are PayWings Holding BV NL and PayWings Technologies d.o.o. SLO.</p>
      <p>SORA collaborates with:</p>
      <ol>
        <li>Unlimint EU Ltd as the banking partner,</li>
        <li>Sum and Substance Ltd UK for identity verification services (through PayWings relationship and agreement),
        </li>
        <li>X Vienas UAB (<a href="https://x1.gr/en/about-us" target="_blank">https://x1.gr/en/about-us</a>) for crypto
          exchange services (through PayWings relationship and agreement),</li>
        <li>GateHub UAB LTH for crypto exchange services (through PayWings relationship and directly).</li>
      </ol>
      <p>Each partner of SORA has its own Terms and Conditions and Privacy Policies. By signing this agreement, you are
        also bound by those Agreements. The terms and Conditions of the partners are provided below in the article
        titled “Linked Documents”.</p>
      <p>Unless expressed explicitly in this agreement, the Third Parties do not have any rights under these Terms of
        Use. You cannot assign any of your rights or obligations which arise from these Terms of Use without the express
        written consent of SORA.</p>

      <h3 id="10">Intellectual Property Rights</h3>

      <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality,
        software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the
        “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled
        by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual
        property rights and unfair competition laws of the relevant jurisdictions, international copyright laws, and
        international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and
        personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or
        Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded,
        translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose
        whatsoever, without our express prior written permission.</p>
      <p>Provided that you are eligible to use the Site, you are granted a limited licence to access and use the Site
        and to download or print a copy of any portion of the Content to which you have properly gained access solely
        for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site,
        the Content and the Marks.</p>

      <h3 id="11">User Representations</h3>

      <p>By using the Site, you represent and warrant that:</p>
      <ol>
        <li>all registration information you submit will be true, accurate, current, and complete;</li>
        <li>you will maintain the accuracy of such information and promptly update such registration information as
          necessary;</li>
        <li>you have the legal capacity and you agree to comply with these Terms of Use;</li>
        <li>you are not a minor in the jurisdiction in which you reside;</li>
        <li>you will not access the Site through automated or non-human means, whether through a bot, script, or
          otherwise;</li>
        <li>you will not use the Site for any illegal or unauthorised purpose;</li>
        <li>your use of the Site will not violate any applicable law or regulation;</li>
        <li>you have not been included in any trade embargoes or economic sanctions list (such as the United Nations
          security council sanctions list), the list of specially designated nationals maintained by OFAC (the office of
          foreign assets control of the US Department of the Treasury), or the denied persons or entity list of the US
          Department of Commerce or respective EU authorities. SORA reserves the right to choose markets and
          jurisdictions to conduct business, and may restrict or refuse, in its discretion, the provision of the
          services in certain countries or regions.</li>
      </ol>
      <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to
        suspend or terminate your account and refuse any and all current or future use of the Site (or any portion
        thereof).</p>

      <h3 id="12">User Registration</h3>

      <p>You may be required to register with the Site. You agree to keep your password confidential and will be
        responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a
        username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or
        otherwise objectionable.</p>

      <h3 id="13">Prohibited Activities</h3>

      <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The
        Site may not be used in connection with any commercial endeavours except those that are specifically endorsed or
        approved by us.</p>
      <p>As a user of the Site, you agree not to:</p>
      <ol>
        <li>systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a
          collection, compilation, database, or directory without written permission from us.</li>
        <li>trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
          information such as user passwords.</li>
        <li>circumvent, disable, or otherwise interfere with security-related features of the Site, including features
          that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site
          and/or the Content contained therein.</li>
        <li>disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
        <li>use any information obtained from the Site to harass, abuse, or harm another person.</li>
        <li>make improper use of our support services or submit false reports of abuse or misconduct.</li>
        <li>use the Site in a manner inconsistent with any applicable laws or regulations.</li>
        <li>use the Site to advertise or offer to sell goods and services.</li>
        <li>engage in unauthorised framing of or linking to the Site.</li>
        <li>upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material,
          including excessive use of capital letters and spamming (continuous posting of repetitive text), that
          interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts,
          alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
        <li>engage in any automated use of the system, such as using scripts to send comments or messages, or using any
          data mining, robots, or similar data gathering and extraction tools.</li>
        <li>delete the copyright or other proprietary rights notice from any Content.</li>
        <li>attempt to impersonate another user or person or use the username of another user.</li>
        <li>sell or otherwise transfer your profile.</li>
        <li>upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active
          information collection or transmission mechanism, including without limitation, clear graphics interchange
          formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware”
          or “passive collection mechanisms” or “pcms”).</li>
        <li>interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the
          Site.</li>
        <li>harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of
          the Site to you.</li>
        <li>attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any
          portion of the Site.</li>
        <li>copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
        </li>
        <li>decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up
          a part of the Site.</li>
        <li>except as may be the result of standard search engine or internet browser usage, use, launch, develop, or
          distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or
          offline reader that accesses the Site, or using or launching any unauthorised script or other software.</li>
        <li>use a buying agent or purchasing agent to make purchases on the Site.</li>
        <li>make any unauthorised use of the Site, including collecting usernames and/or email addresses of users by
          electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated
          means or under false pretences.</li>
        <li>use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any
          revenue-generating endeavour or commercial enterprise.</li>
      </ol>

      <h3 id="14">Site Management</h3>

      <p>We reserve the right, but not the obligation, to:</p>
      <ol>
        <li>monitor the Site for violations of these Terms of Use; </li>
        <li>take appropriate legal action against anyone who, in our sole discretion, violates the applicable law or
          these Terms of Use, including without limitation, reporting such user to law enforcement authorities; </li>
        <li>in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or
          disable (to the extent technologically feasible) any of your contributions or any portion thereof;</li>
        <li>in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise
          disable all files and content that are excessive in size or are in any way burdensome to our systems; and</li>
        <li>otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the
          proper functioning of the Site.</li>
      </ol>

      <h3 id="15">Privacy Policy</h3>

      <p>As part of providing the Service, we collect and use your personal information and we care about data privacy
        and security. SORA`s Privacy Policy explains how we use this data to provide you with the Service. It also
        explains your rights in relation to data privacy and processing. We will only use your personal information as
        set out in our Privacy Policy found here: <a href="/privacy" target="_blank">https://soracard.com/privacy</a>.
        By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use.
        Please be advised the Site is hosted in London (UK). If you access the Site from any other region of the world
        with laws or other requirements governing personal data collection, use, or disclosure that differ from
        applicable laws in London (UK), then through your continued use of the Site, you are transferring your data to
        London (UK), and you agree to have your data transferred to and processed in London (UK).</p>
      <p>If you have any questions relating to your personal data, please send us an email at <a
          href="mailto:support@soracard.com">support@soracard.com</a> or check out our Privacy Policy for further
        information.</p>

      <h3 id="16">Term and Termination</h3>

      <p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER
        PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
        LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
        REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
        CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
        PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
        WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
      <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new
        account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on
        behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take
        appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>

      <h3 id="17">Modifications and Interruptions</h3>

      <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our
        sole discretion without notice. However, we have no obligation to update any information on our Site. We also
        reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be
        liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
      </p>
      <p>We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other
        problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We
        reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or
        for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or
        inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the
        Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to
        supply any corrections, updates, or releases in connection therewith.</p>

      <h3 id="18">Governing Law</h3>

      <p>Please note that these Terms of Use, their subject matter and their formation, are governed by the English Law
        and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly
        excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the
        protection provided to you by obligatory provisions of the law of your country of residence.</p>

      <h3 id="19">Dispute Resolution</h3>

      <h4>Binding Arbitration</h4>
      <p>Any dispute arising from the relationships between the parties to this contract shall be determined by one
        arbitrator who will be chosen in accordance with the [Arbitration and Internal Rules of the European Court of
        Arbitration being part of the European Centre of Arbitration] having its seat in London, United Kingdom, and
        which are in force at the time the application for arbitration is filed, and of which adoption of this clause
        constitutes acceptance. The seat of arbitration shall be London, United Kingdom. The language of the proceedings
        shall be English. Applicable rules of substantive law shall be the English law.</p>
      <h4>Restrictions</h4>
      <p>The Parties agree that any arbitration shall be limited to each dispute between the Parties individually. To
        the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no
        right or authority for any dispute to be arbitrated on a class-action basis or to utilise class action
        procedures; and (c) there is no right or authority for any dispute to be brought in a purported representative
        capacity on behalf of the general public or any other persons.</p>
      <h4>Exceptions to Arbitration</h4>
      <p>The Parties agree that the following disputes are not subject to the above provisions concerning binding
        arbitration: (a) any disputes seeking to enforce or protect, or concerning the validity of, any of the
        intellectual property rights of a Party; (b) any dispute related to, or arising from, allegations of theft,
        piracy, invasion of privacy, or unauthorised use; and (c) any claim for injunctive relief. If this provision is
        found to be illegal or unenforceable, then neither Party will elect to arbitrate any dispute falling within that
        portion of this provision found to be illegal or unenforceable and such dispute shall be decided by a court of
        competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the
        personal jurisdiction of that court.</p>

      <h3 id="20">Corrections</h3>

      <p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including
        descriptions, pricing, availability, and various other information. We reserve the right to correct any errors,
        inaccuracies, or omissions and to change or update the information on the Site at any time, without prior
        notice.</p>

      <h3 id="21">Disclaimer</h3>

      <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES
        WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
        IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
        REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED
        TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY:</p>
      <ol>
        <li>ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,</li>
        <li>PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
          SITE,</li>
        <li>ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
          FINANCIAL INFORMATION STORED THEREIN,</li>
        <li>ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE,</li>
        <li>ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD
          PARTY, AND/OR</li>
        <li>ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
          RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE.</li>
      </ol>
      <p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
        OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
        FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
        MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
        PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT
        AND EXERCISE CAUTION WHERE APPROPRIATE.</p>

      <h3 id="22">Limitations of Liability</h3>

      <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
        INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST
        REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR
        ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID,
        IF ANY, BY YOU TO US. CERTAIN NATIONAL LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
        WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE
        ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>

      <h3 id="23">Indemnification</h3>

      <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all our
        respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or
        demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of:</p>
      <ol>
        <li>use of the Site;</li>
        <li>breach of these Terms of Use;</li>
        <li>any breach of your representations and warranties set forth in these Terms of Use;</li>
        <li>your violation of the rights of a third party, including but not limited to intellectual property rights; or
        </li>
        <li>any overt harmful act toward any other user of the Site with whom you connected via the Site.</li>
      </ol>
      <p>Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and
        control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense,
        with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or
        proceeding which is subject to this indemnification upon becoming aware of it.</p>

      <h3 id="24">Complaints Policy</h3>

      <p>You may make a complaint by contacting our support or by sending an email to <a
          href="mailto:support@soracard.com">support@soracard.com</a>. We will endeavour to resolve a reported complaint
        quickly. In any case, we shall resolve a reported complaint not later than 14 days after the complaint was
        addressed to us. While we will strive to do our best to provide you with any information you require in an
        accurate manner, any information given shall be subject to these Terms and Use and/or any other terms,
        conditions or rules directly contained in email format. In case of any contradictions between the information
        given by our support and the Terms of Use, the provisions contained in these Terms of Use shall prevail. Without
        prejudice to your legal rights, you hereby acknowledge that any complaint made by you more than 14 days after
        the date of finalisation of the transaction which is the subject of the complaint in question will not be taken
        into consideration and shall have no value.</p>

      <h3 id="25">User Data</h3>

      <p>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the
        Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you
        are solely responsible for all data that you transmit or that relates to any activity you have undertaken using
        the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you
        hereby waive any right of action against us arising from any such loss or corruption of such data.</p>

      <h3 id="26">Electronic Communications, Transactions, and Signatures</h3>

      <p>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You
        consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other
        communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that
        such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
        OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
        COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations,
        rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or
        retention of non-electronic records, or to payments or the granting of credits by any means other than
        electronic means.</p>

      <h3 id="27">Regulatory Matters</h3>

      <p>BY ACCEPTING THESE TERMS OF USE AND USING THE SITE, THE USER ACKNOWLEDGES AND EXPLICITLY AGREES THAT THE FORMAL
        ISSUER OF THE SORA CARD IS THE LICENCE PROVIDER, WHO PROVIDES THE RESPECTIVE FINANCIAL SERVICES TO THE USERS.
        Relationship between the Licence Provider and the User shall be governed by the terms and conditions of the
        Licence Provider (available via https://www.penrose-digital.com/legalsandpolicies), whereby it shall be deemed
        that by accepting these Terms of Use and using the Site, the User has entered into the direct relationship with
        the Licence Provider and has accepted the aforementioned terms and conditions of the Licence Provider. With
        respect to matters related to the regulatory aspect of SORA CARD, the User shall therefore directly contact the
        Licence Provider, whereby SORA shall not be in any event liable for any action or omission of the Licence
        Provider.</p>

      <h3 id="28">Miscellaneous</h3>

      <p>These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site
        constitute the entire agreement and understanding between you and us.</p>
      <p>Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver
        of such right or provision. These Terms of Use fully operate permissible by law.</p>
      <p>We may assign any or all our rights and obligations to others at any time.</p>
      <p>If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or
        unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not
        affect the validity and enforceability of any remaining provisions.</p>
      <p>There is no joint venture, partnership, employment or agency relationship created between you and us as a
        result of these Terms of Use or use of the Site.</p>
      <p>You agree that these Terms of Use will not be construed against us by virtue of having drafted them.</p>
      <p>You hereby waive any and all defences you may have based on the electronic form of these Terms of Use and the
        lack of signing by the parties hereto to execute these Terms of Use.</p>

      <h3 id="29">Contacts</h3>

      <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site,
        please contact us at:</p>
      <h4>SORA BIOME</h4>
      <p> Sveta Sofia 8, Str.<br> Floor 1, Office 101<br> 1000 SOFIA<br> Bulgaria </p>
      <p>Email: <a href="mailto:support@soracard.com">support@soracard.com</a></p>

      <h3 id="30">Linked Documents</h3>

      <p>Partner’s Agreements are provided below. Please read them carefully, by signing you are agreeing to these terms
        and policies too:</p>
      <ol>
        <li>PayWing’s Terms and Conditions for users: <a href="https://www.paywings.com/terms-conditions-consumer/"
            target="_blank">https://www.paywings.com/terms-conditions-consumer/</a></li>
        <li>PayWing’s Privacy Policy <a href="https://www.paywings.com/privacy-policy/"
            target="_blank">https://www.paywings.com/privacy-policy/</a></li>
        <li>PayWing’s Terms and Conditions for Business <a href="https://www.paywings.com/terms-conditions-business/"
            target="_blank">https://www.paywings.com/terms-conditions-business/</a></li>
        <li>Unlimint, Terms of Use <a href="https://www.unlimint.com/website-terms-of-use/"
            target="_blank">https://www.unlimint.com/website-terms-of-use/</a></li>
        <li>Sum and Substance Ltd, Privacy Policy <a href="https://sumsub.com/privacy-notice/"
            target="_blank">https://sumsub.com/privacy-notice/</a></li>
        <li>GateHub UAB, Terms of Use <a href="https://www.gatehub.net/legal/gatehub-uab"
            target="_blank">https://www.gatehub.net/legal/gatehub-uab</a></li>
      </ol>

      <h2 id="31">AML/CTF Policy</h2>

      <hr>

      <h3>SORA BIOME</h3>

      <h3 id="32">Sweeping Clause</h3>

      <p>Words imposing the singular meaning shall include, where the context so admits, the plural meaning and vice
        versa. Words denoting the masculine gender shall include the feminine and neuter genders and wording denoting
        natural persons shall include corporations and forms and all such words shall be construed interchangeably in
        that manner.</p>

      <h3 id="33">Audience and Confidentiality</h3>

      <p>This document is classified as a controlled information asset and intended for the internal use of recipients
        only and may not be distributed externally or reproduced for external distribution in any form without express
        written permission of SORA BIOME.</p>

      <h3 id="34">Acronyms in Use</h3>

      <p>The following list of Acronyms aims to guide the reader all through the document:</p>
      <table>
        <tbody>
          <tr>
            <td><strong>ABC</strong></td>
            <td>Anti-Bribery and Corruption</td>
          </tr>
          <tr>
            <td><strong>AML</strong></td>
            <td>Anti-Money Laundering</td>
          </tr>
          <tr>
            <td><strong>BO</strong></td>
            <td>Beneficial Owner (as defined in relevant AML/CTF legislation)</td>
          </tr>
          <tr>
            <td><strong>CDD</strong></td>
            <td>Customer Due Diligence</td>
          </tr>
          <tr>
            <td><strong>FCA</strong></td>
            <td>Financial Conduct Authority</td>
          </tr>
          <tr>
            <td><strong>CTF</strong></td>
            <td>Counter Terrorism Financing</td>
          </tr>
          <tr>
            <td><strong>EDD</strong></td>
            <td>Enhanced Due Diligence</td>
          </tr>
          <tr>
            <td><strong>FATF</strong></td>
            <td>Financial Action Task Force</td>
          </tr>
          <tr>
            <td><strong>KYC</strong></td>
            <td>Know Your Customer</td>
          </tr>
          <tr>
            <td><strong>ML</strong></td>
            <td>Money Laundering</td>
          </tr>
          <tr>
            <td><strong>ODD</strong></td>
            <td>Ordinary Due Diligence</td>
          </tr>
          <tr>
            <td><strong>PEP</strong></td>
            <td>Politically Exposed Person(s)</td>
          </tr>
          <tr>
            <td><strong>PoC</strong></td>
            <td>Point of Contact</td>
          </tr>
          <tr>
            <td><strong>RBA</strong></td>
            <td>Risk Based Approach</td>
          </tr>
          <tr>
            <td><strong>SDD</strong></td>
            <td>Simplified Due Diligence</td>
          </tr>
          <tr>
            <td><strong>SORA</strong></td>
            <td>SORA BIOME</td>
          </tr>
          <tr>
            <td><strong>TF</strong></td>
            <td>Terrorism Financing</td>
          </tr>
        </tbody>
      </table>

      <h3 id="35">Linked Documents</h3>

      <h4>European Directives and Regulations</h4>
      <ul>
        <li>4th Anti Money Laundering Directive, (2015/849/EU);</li>
        <li>5th Anti Money Laundering Directive, (2018/843/EU);</li>
        <li>Regulation (EU) 2015/847 of the European Parliament and of the Council of 20 May 2015 on information
          accompanying transfers of funds;</li>
        <li>Commission Delegated Regulation (EU) 2018/1467 of 27 July 2018 amending Delegated Regulation (EU) 2016/1675
          of 14 July 2016 in relation to the high-risk third countries with strategic deficiencies.</li>
      </ul>
      <h4>UK Laws and regulations</h4>
      <p>The UK legal framework on AML/CTF includes the following (without prejudice to the exhaustiveness of the list
        to follow):</p>
      <ul>
        <li>The Proceeds of Crime Act 2002 as amended (hereinafter “POCA”);</li>
        <li>The Terrorism Act 2000;</li>
        <li>The Fraud Act 2006;</li>
        <li>Terrorist Asset-Freezing etc. Act 2010;</li>
        <li>The Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017
          (hereinafter “MLRS”);</li>
        <li>Sanctions and Anti-Money Laundering Act 2018;</li>
        <li>The Bribery Act 2010;</li>
        <li>The Money Laundering and Terrorist Financing (Amendment) Regulations 2019.</li>
      </ul>
      <h4>FCA Notices and Guidances</h4>
      <ul>
        <li>Financial Crime Guide: A Firm's guide to countering financial crime (FCG);</li>
        <li>Finalised Guidance FG 17/6: The treatment of politically exposed persons for anti money laundering purposes
          (July 2017);</li>
        <li>Consultation Paper CP 19/3*: Guidance on Cryptoassets (January 2019);</li>
        <li>Policy Statement PS 19/22: Guidance on Cryptoassets - Feedback and Final Guidance to CP 19/3 (July 2019).
        </li>
      </ul>
      <p>In the context of the fight against money laundering and terrorist financing, SORA will also base its actions
        on the following documents:</p>
      <ul>
        <li>The Joint Money Laundering Steering Group Guidance: Prevention of money laundering / combating terrorist
          financing (2017);</li>
        <li>NCA Guidance on submitting better quality Suspicious Activity Reports (2019),</li>
        <li>OFSI Financial Sanctions Guidance (2020).</li>
      </ul>
      <h4>Internal Guidelines and Supplementary Documents </h4>
      <ul>
        <li>FCA Anti-money laundering Annual report 2018/19;</li>
        <li>AML/CTF Comfort Letter.</li>
      </ul>

      <h3 id="36">Preamble</h3>

      <p>It is the policy of SORA BIOME (hereinafter the “Company” or “SORA”) to prohibit and actively prevent money
        laundering and any activity that facilitates money laundering or the financing of terrorist or criminal
        activities. The Company will comply with all applicable requirements and regulations in regard to Anti-Money
        Laundering, Counter Terrorism Financing and Anti-Bribery and Corruption.</p>
      <p>SORA is not obliged (by statutory law) to perform any AML/CTF measures in the course of its business
        operations. Nevertheless, due to its business cooperation with Unlimint EU Ltd (hereinafter the “Licensed
        Partner”), which provides the services with respect to the Company's main product – SORA CARD, and which is, as
        licensed electronic money issuance institution, obliged to perform all respective AML/CTF measures in accordance
        with applicable legislation, the Company decided to voluntarily follow the best market practices with respect to
        AML/CTF measures.</p>
      <p>The purpose of this Anti-Money Laundering / Counter Terrorism Financing / Anti-Bribery and Corruption and Know
        Your Customer Policy (hereinafter “AML/CTF policy”) is therefore to establish the general framework for the
        fight against money laundering, terrorism financing, bribery and corruption and other crimes. SORA is committed
        to reviewing the AML/CTF strategies and objectives on an ongoing basis and to maintaining an effective AML/CTF
        program to ensure appropriate policies, procedures and internal controls are in place to account for changes in
        regulations and/or in the Company’s business.</p>
      <p>Foreseen the dynamic environment of the UK and the enlarged scope of compliance, the present policy aims to
        create awareness, to safeguard the reputation of the Company and to protect the Company from the risk of being
        used for money laundering, for terrorism financing or being subject to bribery and corruption.</p>
      <p>SORA has put in place policies and procedures with the objective to ensure that the relevant customer due
        diligence measures are correctly and completely applied as well as to specify the professional diligences to be
        performed by the Company.</p>
      <p>In addition to applicable legal and regulatory obligations which bound the Company, its shareholders, its
        directors and its employees, SORA has strong ethical values which enforce a compliance culture in the working
        environment and in every relation in which the Company is involved.</p>

      <h3 id="37">Scope of Application</h3>

      <p>SORA is committed to high standards of AML/CTF compliance and requires management and employees to adhere to
        these standards in preventing the use of the Company’s products and services for money laundering purposes.</p>
      <p>We are committed to adhere to standards of anti-money laundering compliance which are based on the applicable
        anti-money laundering laws and regulations. In any country/jurisdiction where the requirements of applicable
        anti-money laundering laws establish a higher standard, our entities located in those jurisdictions must meet
        those standards.</p>

      <h3 id="38">Financial Action Task Force</h3>

      <p>On a quarterly basis, the “Financial Action Task Force” (hereinafter “FATF”) produces statements highlighting
        AML related issues which include the list of jurisdictions presenting a higher risk for ML and it is anticipated
        that in the future such statements will be extended to jurisdictions with issues regarding the control of TF.
      </p>
      <p>Such statements and subsequent notices or regulations produced by the UK authorities for local implementation
        are a dynamic part of this procedure and are to be considered as an integral part of the same.</p>
      <p>From time to time, the FATF amends or revises the current list of recommendations to be followed at
        international level. Whenever this occurs, new rules and regulations may be produced in that sense.</p>

      <h3 id="39">Definitions</h3>

      <h4>Money Laundering</h4>
      <p>“Money Laundering” (hereinafter “ML”) is generally defined as engaging in acts designed to conceal or disguise
        the true origins of criminally derived proceeds so that the proceeds appear to have derived from legitimate
        origins or constitute legitimate assets. For the purposes of this Policy “money laundering” shall mean any
        action as defined in clause 340(11) of the Proceeds of Crime Act 2002 or any other legal act that supersedes the
        aforementioned act.</p>
      <p>The legal definition of money laundering is very broad and encompasses a whole set of devices which all serve
        the purpose to provide a false justification of the origin of the property forming the object or proceeds of the
        predicate offences.</p>
      <p><em><strong>If you know or suspect that suspect money laundering has taken place, or is taking place, you may
            yourself be committing an offence.</strong></em></p>
      <h4>Terrorism Financing</h4>
      <p>Pursuant to MLRS 2017 the offence of “terrorist financing” is defined as an act which constitutes an offence
        under:</p>
      <ol>
        <li>section 15 (fund-raising), 16 (use and possession), 17 (funding arrangements), 18 (money laundering) or 63
          (terrorist finance: jurisdiction) of the Terrorism Act 2000(a); and</li>
        <li>paragraph 7(2) or (3) of Schedule 3 (freezing orders: offences) to the Anti-terrorism, Crime and Security
          Act 2001(b);</li>
        <li>regulation 10 (contravention and circumvention of prohibitions) of the ISIL (Da’esh) and Al-Qaeda
          (Asset-Freezing) Regulations 2011(c); or</li>
        <li>section 11 (freezing of funds and economic resources), 12 (making funds or financial services available to
          designated person), 13 (making funds or financial services available for benefit of designated person), 14
          (making economic resources available to designated person), 15 (making economic resources available for
          benefit of designated person) or 18 (circumventing prohibitions etc) of the Terrorist AssetFreezing etc Act
          2010(d);</li>
      </ol>
      <h4>Bribery</h4>
      <p>Under the Bribery Act 2010, it is an offence for a person to "bribe" another person, and that applies where the
        person (directly, or through a third party) offers, promises or gives a financial or other advantage to another
        person, and either:</p>
      <ul>
        <li>intends that advantage to induce the recipient to perform improperly a relevant function or activity, or to
          reward a person for the improper performance of such a function or activity; or</li>
        <li>knows or believes that the acceptance of the advantage would itself constitute the improper performance of a
          relevant function or activity.</li>
      </ul>
      <p>It is also an offence to request or accept a bribe, or to perform a function improperly in the expectation that
        an advantage will be received. Relevant functions include any activities which are connected to a business, or
        which are performed in the course of a person's employment.</p>
      <p>There is also a corporate offence which concerns persons associated with commercial organisations. If such a
        person bribes another, intending to obtain or retain business for the commercial organisation, or to obtain or
        retain an advantage in the conduct of business for the commercial organisation, the commercial organisation will
        commit an offence. It is a defence for the commercial organisation to prove that it had "adequate procedures" in
        place, designed to prevent such persons associated with it from undertaking such conduct.</p>
      <p>SORA has a zero-tolerance approach to bribery, and SORA`s officers, employees and associates are expected to
        comply with this. Officers and employees are prohibited from giving or accepting gifts or other inducements (or
        promising to do so) in situations where attempted bribery is suspected. Prior to giving or accepting a gift or
        inducement, an employee should confirm with the company's director that it is acceptable to do so. The Company
        will keep a written record of all gifts (including invitations and hospitality).</p>
      <p><em><strong>If you suspect that bribery has taken, or is taking place, it is your responsibility to notify the
            Company's director.</strong></em></p>
      <h4>Beneficial Owner</h4>
      <p>Since the adoption of the MLRS 2017 transposing the Directive 2015/849, the definition of Beneficial Owner
        (hereinafter “BO”) reads as follows:</p>
      <p><strong>“Beneficial Owner”</strong> means any natural person(s) who ultimately owns or controls the customer
        and/or the natural person(s) on whose behalf a transaction or activity is being conducted and includes at least:
      </p>
      <ol type="A">
        <li><strong>in the case of corporate entities:</strong>
          <ol>
            <li>
              <p>the natural person(s) who ultimately owns or controls a legal entity through direct or indirect
                ownership of a sufficient percentage of the shares or voting rights or ownership interest in that
                entity, including through bearer shareholdings, or through control via other means, other than a company
                listed on a regulated market that is subject to disclosure requirements consistent with Union law or
                subject to equivalent international standards which ensure adequate transparency of ownership
                information.</p>
              <p>A shareholding of 25 % plus one share or an ownership interest of more than 25 % in the customer held
                by a natural person shall be an indication of direct ownership. A shareholding of 25 % plus one share or
                an ownership interest of more than 25 % in the customer held by a corporate entity, which is under the
                control of a natural person(s), or by multiple corporate entities, which are under the control of the
                same natural person(s), shall be an indication of indirect ownership.</p>
            </li>
            <li>if, after having exhausted all possible means and provided there are no grounds for suspicion, no person
              under point (i) is identified, or if there is any doubt that the person(s) identified are the beneficial
              owner(s), the natural person(s) who hold the position of senior managing official(s),</li>
          </ol>
        </li>
        <li><strong>in the case of trusts:</strong>
          <ol>
            <li>the settlor;</li>
            <li>the trustee(s);</li>
            <li>the protector, if any;</li>
            <li>the beneficiaries, or where the individuals benefiting from the legal arrangement or entity have yet to
              be determined, the class of persons in whose main interest the legal arrangement or entity is set up or
              operates;</li>
            <li>any other natural person exercising ultimate control over the trust by means of direct or indirect
              ownership or by other means;</li>
          </ol>
        </li>
        <li><strong>in the case of legal entities such as foundations, and legal arrangements similar to
            trusts</strong>, the natural person(s) holding equivalent or similar positions to those referred to in point
          (B).</li>
      </ol>
      <p>SORA shall determine -at the time of the customer identification and for the purposes of the obligations to
        identify and verify the beneficial owner- if the customer acts for his/her own account or, where appropriate,
        for the account of other persons.</p>
      <p>The identification of beneficial owners concerns their surname, first name and nationality as well as their
        date and place of birth and their address for individuals. Corporate beneficial owners will be subject to SORA`s
        customer due diligence requirements. The verification of these data shall be made, notably, using information
        obtained from customers, public registers or any other independent and reliable source available. SORA shall
        take all reasonable measures in order to ensure that the real identity of the beneficial owner is known.</p>
      <h4>Politically Exposed Person</h4>
      <p>A Politically Exposed Person (hereinafter “PEP”) is an individual who is or has been entrusted with prominent
        public functions such as head of a state or of a government, senior politicians, senior
        government/judicial/military officers, senior executives of state-owned corporations or important political
        party official, or family members or close relatives of PEPs.</p>
      <p>In the MLRS 2017, Regulation 35, part 12, PEP is defined as an individual who is entrusted with prominent
        public functions, other than as a middle-ranking or more junior official, and includes;</p>
      <ol type="A">
        <li>A “family member” of a politically exposed person includes: <ul>
            <li>a spouse or civil partner of the PEP;</li>
            <li>children of the PEP and the spouses or civil partners of the PEP’s children;</li>
            <li>parents of the PEP.</li>
          </ul>
        </li>
        <li>A “known close associate” of a PEP means: <ul>
            <li>an individual known to have joint beneficial ownership of a legal entity or a legal arrangement or any
              other close business relations with a PEP;</li>
            <li>an individual who has sole beneficial ownership of a legal entity or a legal arrangement which is known
              to have been set up for the benefit of a PEP.</li>
          </ul>
        </li>
      </ol>
      <h4>Shell Bank</h4>
      <p>“Shell bank” means a bank that has no physical presence in the country in which it is incorporated and
        licensed, and which is unaffiliated with a regulated financial group that is subject to effective consolidated
        supervision.</p>
      <p>Physical presence means a meaningful mind and management located within a country. The existence simply of a
        local agent or low-level staff does not constitute physical presence.</p>
      <h4>Risk Based Approach</h4>
      <p>In the context of the fight against ML and TF, it is of the utmost importance that SORA identifies, assesses
        and understands the ML / TF risks to which the Company is exposed and that it takes appropriate measures that
        are proportionate to those risks.</p>
      <p>The “Risk Based Approach” (hereinafter “RBA”) refers to the decision to apply a specific rule to a situation as
        a result of an assessment of the potential risk involved in the same and considering the obligations imposed by
        rules and regulations applicable at the time of such assessment.</p>
      <h4>Risk Assessment</h4>
      <p>A “Risk Assessment” is the collection and analysis of relevant data in order to produce an objective profile of
        a person, entity, jurisdiction, product or situation, with the aim of understanding the risk involved in the
        relationship.</p>
      <p>The scope of a risk assessment is limited to the type of risk that such assessment explicitly mentions to have
        taken into consideration.</p>

      <h3 id="40">Personal responsibility</h3>

      <p>Every staff member of the Company is responsible for the fight against money laundering, the countering of
        terrorist financing, the detection and exposure of bribery and corruption and therefore all staff members are to
        follow the AML/CTF policy, to inform supervisors regarding any activity potentially linked to the actions
        mentioned herein.</p>
      <p>To receive a copy of the relevant legal texts or regulations, as well as a latest version of each regulation,
        please contact the Company's director for further details.</p>
      <p>Every single employee or board member of SORA has the responsibility of complying with the law, policies and
        procedures, in specific with AML/CTF/KYC and ABC related areas, as well as the legal obligation to use his/her
        knowledge for the avoidance of being involved or facilitating the use of the Company in the financing of any
        illegal action, but in particular the ones cover under the scope of the AML/CTF policy.</p>
      <p>According to specific hierarchy levels, tasks and responsibilities, different staff members will perform
        different tasks and will commit to further responsibilities in order to ensure compliance, to protect the
        Company and to protect the financial market.</p>
      <p>The ultimate responsibility for compliance seats with the directors and the shareholders of the Company
        according to the scope of the decision made.</p>
      <p>This responsibility does not include the individual responsibility of each member of the Company staff, nor
        responsibilities assigned to third parties when the relevant regulation appoints or admits the transfer,
        partial, limited or total of such responsibility(ies).</p>
      <p>List of roles, tasks and responsibilities related to the joint fight against ML, TF and Bribery and Corruption:
      </p>
      <ul>
        <li>All staff members shall observe the AML/CTF policy and when applicable report to superiors of any conduct
          which could potentially harm the Company;</li>
        <li>Client-facing staff are the first line of protection of the Company, and it is to them to provide
          information, use their knowledge and help in the prevention of criminal activities taking place in connection
          with the Company or its employees;</li>
        <li>The Company's director is to communicate with client-facing persons and to verify the information/document
          provided to ensure coherence and to serve as a second line of defence;</li>
        <li>The Company's director is responsible to communicate potential risk, to perform an enhanced oversight, to
          raise alerts and to stimulate compliance awareness and compliance in decisions made by Company's employees;
        </li>
        <li>The Company's director is ultimately responsible for the business conduct and shall ensure compliance when
          taking decisions;</li>
      </ul>

      <h3 id="41">Professional obligations</h3>

      <p>UK laws, rules and regulations include a number of professional obligations, which SORA voluntarily follows
        (although it is not obliged by statutory law to do that). Those obligations include:</p>
      <ol>
        <li>A Risk Based Approach and a Risk Analysis;</li>
        <li>Vigilance obligations, including Customer Due Diligence (hereinafter “CDD”) of SORA CARD users;</li>
        <li>Cooperation with the Licence Provider.</li>
      </ol>
      <p>In development of such professional obligations, the Company performs the following controls, risk mitigation
        plans and specific measures (as applicable).</p>
      <h4>Risk Based Approach and Risk Analysis</h4>
      <p>No activity or service can be considered risk-free if it operates in an economic environment and has access to
        markets. Understanding the conditions of the market and the risk profile of the targeted customers of SORA,
        certain activities will be performed in the frame of a RBA, in which risks of ML, TF or bribery and corruption
        (in particular) will be analysed from a regulatory and from a reputation-based approach.</p>
      <p>This analysis will be a collection of factors that -together with the services provided- may generate
        mitigation actions and other action plans as considered appropriate by the Company's director. The analysis of
        the specific risk applicable to a business relationship may generate a further level of control, a specific
        action or a number of operations which will represent the mitigation of the detected risk. Every time that a
        particular risk related to a product, or a business relationship appears, the same will be analysed in order to
        see the potential impact of such risk and if needed to create an action plan. The risk level should be in line
        with the level of due diligence applied and the depth of knowledge of the customer.</p>
      <p>SORA will take appropriate measures to identify and assess the ML/TF risks to which it is exposed, taking into
        account risk factors including those relating to its customers, countries or geographic areas, products,
        services, transactions or delivery channels. Those measures will be proportionate to the nature and size of the
        Company. The risk assessments shall be documented, kept up-to-date and made available to the Licensed Partner.
      </p>
      <h4>Customer Due Diligence</h4>
      <p>Due diligence refers to the process of collecting and analysing information and documents required to properly
        identify the customer and to verify their identity. SORA performs Customer Due Diligence of all of its customers
        and business partners that are being considered as users of SORA CARD, whereby such CDD shall be always aligned
        with the Licence Provider. In case Licence Provider performs its own CDD of the same customer(s) and/or business
        partners, SORA shall during such CDD perform all acts that the Licence Provider reasonably requires from SORA in
        order for the Licence Provider to fulfil all of its legal obligations under the applicable AML/CTF legislation.
      </p>
      <p>The different types of Customer Due Diligence are:</p>
      <ol>
        <li>Simplified Due Diligence: Set of reduced/simplified measures aimed to properly identify a customer whenever
          the risk has been deemed as low and the legal and regulatory conditions to apply such reduction are met;</li>
        <li>Ordinary Due Diligence: Set of measures aimed to properly identify a customer whenever the application of
          Simplified Due Diligence is not possible, and no risk factors call for the enhancement of Due Diligence;</li>
        <li>Enhanced Due Diligence: Set of measures aimed to properly identify a customer whenever in presence of risk
          factors requiring a deeper knowledge of the customer or when a legal and regulatory provision requires such
          measures.</li>
      </ol>
      <p>The following table will give an overview of the correlation between the risk and the level of due diligence
        applicable which may vary according to several considerations. A field marked with “x” means that this
        combination is excluded by relevant regulations; a field marked with “✓” means that this combination is
        applicable if conditions set in the relevant regulations are met.</p>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>Low Risk Level</td>
            <td>Medium Risk Level</td>
            <td>High Risk Level</td>
          </tr>
          <tr>
            <td>Simplified Due Diligence</td>
            <td>✓</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Ordinary Due Diligence</td>
            <td>✓</td>
            <td>✓</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Enhanced Due Diligence</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
        </tbody>
      </table>
      <p>The specific measures to be taken on a case-by-case basis will vary in accordance with the specificities of the
        case but in no event will go against the prohibitions set in the table above. Further details on how to decide
        which level of due diligence to apply are set out in the AML / CTF Procedures of the Licence Provider, which the
        Company shall follow in this respect.</p>
      <p><strong>Performance, Timing, Updating and Documentation of CDD</strong></p>
      <p>CDD refers to the identification and verification of identity of customers, beneficial owners, representatives,
        relevant related parties and the identification of potentially relevant risks affecting the business
        relationship. According to the risk level, CDD can be simplified, standard (ordinary) or enhanced.</p>
      <p><strong>Performance of CDD</strong></p>
      <p>CDD implies the obligation of collecting information and documents relevant to the customer identification,
        rating of the customer and the business relationship.</p>
      <p>For this purpose, SORA has put in place a series of systems, teams and tools for gathering and analysis of
        information and documents aimed to create a customer profile. To achieve this aim, the following shall be
        considered:</p>
      <ol>
        <li>Identifying and verifying the customer’s identity on the basis of documents, data or information obtained
          from a reliable and/or independent source, as applicable, according to the risk level of the customer and the
          type of due diligence required. Such information/documents may vary on a case-by-case basis but at all times
          should provide comfort regarding the understanding of the customer, structure, beneficial ownership and
          profile as applicable;</li>
        <li>If the BO(s) is/are identified, relevant documents and pieces of information shall be gathered to clearly
          identify and verify the identity of such person/people in accordance with the risk level and the type of due
          diligence to be applied in each case; </li>
        <li>Obtaining information on the purpose and intended nature of the business relationship as well as determining
          whether the customer is acting on its own behalf or on behalf of a third party;</li>
        <li>Conducting ongoing monitoring of the business relationship including scrutiny of transactions (when the
          nature of the services provided involve transactions) undertaken throughout that relationship to ensure that
          the transactions being conducted are consistent with the acquired customer knowledge, its commercial
          activities and risk profile, including, where necessary, the source of the funds and ensuring that the
          documents, data and information held are up-to-date.</li>
      </ol>
      <p>In accordance with the relevant regulation, CDD should be performed in all cases and will include the
        above-mentioned elements.</p>
      <p>For customers identified as high risk, the Company's director is responsible for reviewing onboarding requests.
      </p>
      <p>When the customer identification process cannot be duly completed, the Company's employees or subcontractors
        should:</p>
      <ul>
        <li>Not engage into a business relationship;</li>
        <li>Not execute the transaction;</li>
        <li>End the existing business relationship;</li>
        <li>Stop the internal process of customer acceptance and continuance;</li>
        <li>Notify the Licence Provider.</li>
      </ul>
      <p><strong>Timing of CDD</strong></p>
      <p>Customers evolve and change over time. In order to respond to this reality, SORA adapts its systems to react to
        new information, documents or relevant finding both for the acceptance and continuance of customer
        relationships.</p>
      <p>To ensure that relevant information and documents correspond to the current situation of the customer, CDD must
        be performed and/or updated according to a number of rules which are described here below:</p>
      <ol>
        <li>When establishing a business relationship;</li>
        <li>A CDD must be applied on all customers registering, independently of the amount involved;</li>
        <li>At any time based on a risk assessment (e.g. in the event of high-risk criteria occurring, significant
          transactions performed, etc.);</li>
        <li>When there is a suspicion of ML or TF (in which case a notification should be made to the Company's
          director);</li>
        <li>When there are doubts about the veracity or adequacy of previous obtained customer identification data.</li>
      </ol>
      <p>The CDD must be applied to all registered users of SORA CARD and to all types of services related to SORA CARD
        independently of the fees applied.</p>
      <p>The customer acceptance process involves the identification and the verification of the identity of the
        registered user of SORA CARD, where applicable the BO and the proxy holder(s), and must be finalised before
        engaging into a business relationship in accordance with the pre-assessed risk level.</p>
      <p>The purpose of the business relationship and the determination of whether or not the customer is acting on its
        own behalf is an integral part of the CDD.</p>
      <p>Any exception to this rule should be explicitly contained in the relevant regulation and the decision to apply
        such provision should be documented in the user’s file.</p>
      <p><strong>Updating CDD</strong></p>
      <p>In respect of the professional obligations of the Company, customer information (and relevant verification
        documents) should be kept up to date.</p>
      <p>The compliance of the customer’s file shall be reviewed in accordance with the following cycle of reviews or
        whenever new information comes to the knowledge of SORA:</p>
      <ul>
        <li>High risk customers’ files have to be reviewed on an annual basis;</li>
        <li>Medium risk customers’ files have to be reviewed every 2 years;</li>
        <li>Low risk customers’ files have to be reviewed every 3 years.</li>
      </ul>
      <p>Triggering facts which may prompt a review (and further update if necessary) of the customer’s file include:
      </p>
      <ul>
        <li>New relevant information comes to the knowledge of the customer relationship team;</li>
        <li>When considered appropriate by a senior management decision;</li>
        <li>When the circumstances of the service or further services require an update of the information, on file.
        </li>
      </ul>
      <p><strong>Documentation of CDD</strong></p>
      <p>The customer acceptance and continuance process has been developed to analyse and store the result of the
        analysis of KYC, AML, CTF and relevant risk rating, knowledge and data as well as to document the formal
        acceptance of each customer based on various risk factors.</p>
      <p>This tool groups together a number of systems which integrate and cooperate in the customer acceptance and
        customer continuance process as well as interact with different working tools used by relevant teams.</p>
      <h4>Monitoring of Customers</h4>
      <p>As part of the monitoring process of CDD, teams are required to perform the necessary duties and conduct
        business in compliance with applicable laws and regulations.</p>
      <p>Official public financial sanctions lists and name screening are integral parts of the customer acceptance
        process as well as the monitoring of customers. Therefore, the Company provides the necessary tools and to
        ensure such control at all times.</p>
      <p>Transactions considered out of the profile of the customer will be scrutinised, analysed and submitted for
        senior management approval.</p>
      <p>In this case, regardless of the decision to perform or reject the operation, documentation of the decision
        shall be stored in the appropriate software for control of documentation.</p>
      <p>Operations, transactions, or orders which raise a reasonable doubt of being linked with bribery and corruption,
        money laundering, or financing of terrorism should be brought to the attention of the Company`s director for
        further analysis.</p>
      <p>As a stakeholder in the process of AML/CTF procedures, within the regulated scope of operations, Unlimint,
        PayWings Holding BV, and PayWings Technologies d.o.o. will jointly control and conduct the AML/CTF procedures on
        behalf of the SORA.</p>
      <p><strong>Complex Operations or Unusual / Suspicious Activities</strong></p>
      <p>The ongoing monitoring duty implies the detection (according to the services provided) of complex operations or
        unusual / suspicious activities by taking into account:</p>
      <ul>
        <li>The size of the amounts involved;</li>
        <li>The type of customers;</li>
        <li>Their profile;</li>
        <li>The information available;</li>
        <li>Other factors considered as relevant by the technical team.</li>
      </ul>
      <p>The level of understanding of the transactions will be determined by the specific services provided and in
        accordance with the access to the information required to perform such service.</p>
      <p><strong>AML / CTF Blacklists, Sanctions, Control and PEP Lists - Screening</strong></p>
      <p>The names of registered customers, BOs, and appropriate related parties shall be screened using the tools
        provided by SORA and the result analysis and documentation of this process is to be considered as part of the
        customer acceptance process.</p>
      <p>SORA will consult on a regular basis and <strong>at minimum after each publication</strong>, all the official
        sanctions’ lists like the European Union and UK financial sanctions’ lists which are published i.a. on the HM
        Treasury and OFSI website and control them against its client database.</p>
      <p>Additionally, an automatic system is in place to ensure the monitoring and trigger a reassessment of the
        registered customer and a potential update of the file as applicable.</p>
      <p>The name screening system is updated regularly with the latest information provided by the service provider in
        cooperation with the provider of the tool to handle potential matches.</p>
      <p>SORA might create its own series of internal lists, which will not necessarily mean the imposition of a
        sanction, blacklisting or any other restrictions. The actions related to such a list will be documented
        according to internal practice.</p>
      <p>If the names of any of SORA`s pending or existing customers appear on a sanctions list, the account will be
        flagged as such and automatically sent to the EDD process, where the Company will immediately manually review
        all the matched results. Any negative hits (e.g. duplicate names or spelling errors) will be removed. If the hit
        indeed turns out to be a positive hit, the company will refuse to enter the relationship.</p>
      <p>In case of a PEP, the Company will perform the appropriate investigation to determine whether it is a real
        match or a false positive. In case of a real match, an assessment shall be produced and documented in order to
        determine further actions to be taken, and will treat PEPs in the following way:</p>
      <ol>
        <li>have approval from the director for establishing or continuing the business relationship with that person;
        </li>
        <li>take adequate measures to establish the source of wealth and source of funds which are involved in the
          proposed business relationship or transactions with that person;</li>
        <li>where the business relationship is entered into, conduct enhanced ongoing monitoring of the business
          relationship with that person.</li>
      </ol>
      <h4>Prohibited and Refused Relationships</h4>
      <p>In the cases in which the relevant regulation prohibits entering into a business relationship with a customer
        or a type of customer, SORA will not accept the customer and will refrain from performing transactions with such
        prohibited individuals or entities. As a matter of example, it is prohibited to establish or maintain a business
        relationship with shell banks and/or sanctioned individuals or companies.</p>
      <p>The Company shall keep a log of all prohibited and refused business relationships together with the reasons for
        such refusal.</p>

      <h3 id="42">Cooperation with the Licence Provider</h3>

      <p>The Company’s directors, officers and employees must cooperate fully with the Licence Provider, and shall:</p>
      <ul>
        <li>Inform without delay, on their own initiative, the Company`s director when they know, suspect or have
          reasonable grounds to suspect that money laundering or terrorist financing is being committed or has been
          committed or attempted, in particular in consideration of the person concerned, its development, the origin of
          the funds, the purpose, nature and procedure of the operation.</li>
        <li>The Company's director is responsible for making disclosures to the Licensed Provider.</li>
        <li>Any report must be accompanied by all supporting information and documents having prompted the report. The
          obligation to report suspicious transactions shall apply regardless of whether those filing the report can
          determine the predicate offence.</li>
        <li>The Company's director shall provide without delay to the Licence Provider, at its request, any information.
          This obligation includes the submission of the documents on which the information is based.</li>
      </ul>
      <p>In combating TF, the obligation to report also applies to funds where there are reasonable grounds to suspect
        that they are linked to or to be used for terrorism, terrorist acts, by terrorist associations, organizations or
        groups or by those who finance terrorism.</p>
      <p>SORA, its officers and employees shall not disclose to the customer concerned or to other third persons the
        fact that the customer is under investigation or that SORA has reported it to the Licence Provider (“no tipping
        off” rule).</p>
      <p>The Company shall refrain from carrying out a transaction which they know or suspect to be related to money
        laundering or terrorist financing where it has not received appropriate consent. The Licence Provider can give
        instructions not to execute one or more operations relating to the transaction or the customer related to the
        SORA CARD product.</p>
      <p>SORA will respond to a request for information from the Licence Provider (hereinafter “Request”) concerning
        users of SORA CARD and transactions with SORA CARD by immediately searching its records to determine whether the
        Company maintains or has maintained any customer account for, or has engaged in any transaction with, each
        individual, entity or organisation named in the Request.</p>
      <p>SORA will designate one or more persons to be the Point of Contact (hereinafter “PoC”) for Requests and will
        promptly update the PoC information following any change in such information.</p>
      <p>Unless otherwise stated in the Request, SORA is required to search its files for each individual, entity or
        organisation named in the Request.</p>
      <p>If SORA finds a match, the Company will take any appropriate action. If the search parameters differ from
        searching through the entire database, for example, if limits to a geographic location apply, the respective
        employee will structure his/her search accordingly.</p>
      <p>If the Company searches the records of the Company and does not find a matching account or transaction, then
        the Company's director will inform the Licence Provider.</p>
      <p>SORA will maintain a register of ML and TF enquiries together with documentation that the Company has performed
        the required search by saving the logs, which will at all times be available on request.</p>
      <p>The Company's director will review, maintain and implement procedures to protect the security and
        confidentiality of requests from the authorities with regard to the protection of customers’ non-public
        information.</p>
      <p>Unless otherwise stated in the Request, SORA will not be required to treat the information request as
        continuing in nature, and we will not be required to treat the Request as a government provided list of
        suspected terrorists for purposes of the customer identification and verification requirements.</p>

      <h3 id="43">Ongoing Training, Recruitment and Awareness</h3>

      <p>The Company’s employees and collaborators are required to participate in ongoing training programs related to
        AML and CTF that are organised by the Licence Provider.</p>

      <h3 id="44">Document Retention</h3>

      <p>SORA will be responsible for holding all elements collected. All customer related data and information will be
        kept and stored in accordance with the applicable legislation and as requested by the Licence Provider (in order
        for the Licence Provider to fulfil all of its legal obligations under applicable AML/CTF legislation).</p>
      <p>In general, SORA will comply with the provisions of the GDPR.</p>

      <h3 id="45">Policy Compliance</h3>

      <h4>Compliance Management</h4>
      <p>The Company will verify compliance with the AML/CTF policy through various methods, including but not limited
        to, internal and external audits, and feedback to the policy owner.</p>
      <h4>Non-Compliance</h4>
      <p>An employee found to have violated the AML/CTF policy may be subject to severe consequences including
        disciplinary action that may trigger various sanctions depending on the nature of the violation. Sanctions may
        range from notification that will stay in the employee’s file, to dismissal in case of severe violation and
        repeating offences.</p>
      <h4>Update and Approval</h4>
      <p>The AML/CTF policy will be revised annually and updated whenever appropriate.</p>
      <h4>Validity and Document Management</h4>
      <p>The AML/CTF policy has been approved by the Company’s director on 28/10/2022. It replaces and supersedes any
        prior policy and procedures on this subject matter. The AML/CTF policy is valid until a revision is published.
      </p>

      <h2 id="46">Information on Collection of Data</h2>

      <hr>

      <h3>SORA BIOME</h3>

      <p>The company SORA BIOME (hereinafter: SORA) does not collect any personal and/or any other data on the users of
        its website (hosted at: https://www.soracard.com (hereinafter: Website).</p>
      <p>Nevertheless, please note that with respect to the SORA`s services available to the users of the Website, the
        following entities may collect certain data of the users of the Website:</p>
      <ol type="a">
        <li>PayWings (Holding, Technologies, Intech)</li>
        <li>Banking partners, including Issuers (Unlimnit, PayrNet)</li>
        <li>Technical providers (eID, SumSub, InfoBip)</li>
        <li>Crypto providers (GateHub)</li>
      </ol>
      <p>The above-mentioned stakeholders may collect:</p>
      <ul>
        <li><strong>Identification data</strong>
          <ul>
            <li>All info on the person, collected in the KYC process</li>
          </ul>
        </li>
        <li><strong>Log files</strong>
          <ul>
            <li>the process for onboarding <strong>(a,b,c,d)</strong></li>
            <li>every login or attempted login <strong>(b)</strong></li>
            <li>all adjacent data needed for a particular step (SMS, email, ..) <strong>(a,b,c,d)</strong></li>
            <li>all actions taken on the banking side (every view and every request, including IP's and some limited
              device information) <strong>(a,b,c)</strong></li>
          </ul>
        </li>
        <li><strong>Transactional data, where all data required for transaction execution and all data for intermittent
            steps are kept, for</strong>
          <ul>
            <li>All banking activities <strong>(a,b,c)</strong></li>
            <li>All card activities <strong>(a,b,c)</strong></li>
            <li>All requests for exchange to and from crypto <strong>(a,b,c,e)</strong></li>
            <li>Automated processes required to run various activities (AML, statistics, compliance oversight)
              <strong>(a,b,c)</strong>
            </li>
          </ul>
        </li>
      </ul>
      <p>In Sofia, on 28/10/2022</p>
      <p><strong>SORA BIOME</strong></p>
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