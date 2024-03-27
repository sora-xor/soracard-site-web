<template>
  <div class="apply text-center">
    <div class="rounded bg-light1 pt-xs pb-s px-s text-xs">
      Get SORA Wallet for mobile:
      <div class="stores">
        <a href="https://apps.apple.com/us/app/sora-dae/id1457566711" class="store"
          style="--image: url('/icons/appstore.svg')">
          <span>App Store</span>
        </a>
        <a href="https://play.google.com/store/apps/details?id=jp.co.soramitsu.sora&hl=en&gl=US" class="store"
          style="--image: url('/icons/googleplay.svg')">
          <span>Google Play</span>
        </a>
      </div>
    </div>
    <div class="rounded bg-light1 pt-xs pb-s px-s text-xs">
      Get the app via QR code:
      <div class="image relative" style="aspect-ratio: 1/1;">
        <img src="/icons/qr.svg" alt="QR Code" width="200" height="200">
      </div>
    </div>
    <!-- <div class="rounded bg-light1 px-s py-xxs">
      <Button href="http://polkaswap.io/#/card" title="Open Polkaswap" target="_blank" />
    </div> -->
  </div>
</template>

<style scoped>
.apply {
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.apply>* {
  display: flex;
  gap: var(--space-xs);
  flex-direction: column;
  align-items: center;
}

.apply>*:nth-child(3) {
  grid-column: span 2;
}

.stores {
  display: flex;
  gap: var(--space-3xs);
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.image {
  width: 100%;
  max-width: 20rem;
  justify-content: center;
  flex: 1;
}

.image>img,
.store::before,
.store::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.store {
  width: 100%;
  max-width: 20rem;
  aspect-ratio: 10/3;
  color: transparent;
  border: 1px solid var(--color-semi-dark);
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
}

.store::after,
.store::before {
  content: '';
  transition: transform 1s var(--ease);
  background-image: var(--image);
  background-repeat: no-repeat;
  background-size: contain;
}

.store::before {
  transform: translateY(75%) scaleY(0.5);
}

@media (hover:hover) {
  .store:hover {
    transform: translateY(0) scale(1.01);
    transition: transform .6s cubic-bezier(.3, 6, .6, 1);
  }

  .store:hover::after {
    transform: translateY(-75%) scaleY(0.5);
  }

  .store:hover::before {
    transform: translateY(0);
  }

  .store>span {
    position: absolute;
    top: -5%;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background-color: var(--color-semi-dark);
    transition: transform 1s var(--ease), border-radius 1s var(--ease);
    transform: translateY(100%);
    opacity: 0.5;
  }

  .store:hover>span {
    transform: translateY(0);
    border-radius: 0;
  }
}
</style>