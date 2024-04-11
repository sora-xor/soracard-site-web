const title = 'SORA Card | Value Freedom',
  description = 'Access the new era of interoperable finance, all in the palm of your hands.',
  keyWords =
    'SORA, Polkaswap, Decentralization, DeFi, Future, Sortition, Metaverse, TradFi, Card, Crypto',
  ogImage = `${process.env.NUXT_PUBLIC_BASE_URL || ''}/og.jpg`

export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', 'nuxt-aos', '@nuxtjs/sitemap'],
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  aos: {
    duration: 800,
  },
  site: {
    url: 'soracard.com',
  },
  sitemap: {
    sources: ['/api/sitemap'],
    credits: false,
  },
  build: {
    transpile: ['gsap'],
  },
  runtimeConfig: {
    gmailClientId: '',
    gmailClientSecret: '',
    gmailRefreshToken: '',
    gmailRedirectUrl: '',
    gmailUser: '',

    recaptchaSecretKey: '',
    public: {
      recaptchaSiteKey: '',

      baseUrl: '',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          key: 'plausible',
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'soracard.com',
        },
        {
          key: 'gtm',
          innerHTML: `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T96DWDZ');`,
        },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: title,
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/icon.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
      ],
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keyWords,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: ogImage,
        },
        {
          name: 'twitter:image:alt',
          content: title,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@sora_xor',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        {
          property: 'og:image:secure_url',
          content: ogImage,
        },
        {
          property: 'og:image:alt',
          content: title,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:url',
          content: 'https://soracard.com',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    },
  },
})
