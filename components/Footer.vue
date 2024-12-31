<template>
  <footer class="lg:pt-30 pb-50">
    <div class="container">
      <div class="flex flex-col flex-wrap gap-12 lg:gap-0 lg:flex-row">
        <div class="w-full order-first flex flex-col items-center lg:w-[40%] lg:flex-row lg:justify-start">
          <NuxtLinkLocale to="/">
            <NuxtImg src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" class="object-contain w-[120px] h-auto"/>
          </NuxtLinkLocale>
        </div>
        <div class=" w-full flex flex-wrap justify-center items-center content-center order-last lg:w-[20%] lg:order-2">
          <p class="flex justify-center w-full gap-1 fz-14">
            <NuxtLinkLocale to="/" class="main-color">
              TitansDev
            </NuxtLinkLocale>
            <span>© 2024</span>
          </p>
          <p class="self-center text-center fz-14">
            {{ t('footer.content') }}
          </p>
        </div>
        <div class="w-full lg:w-[40%] lg:order-last">
          <ul class="flex flex-col gap-2 footer-primary xl:flex-row xl:justify-end">
            <NuxtLinkLocale to="/politica-de-privacidad" class="self-center">{{ t('footer.legal.privacyPolicy') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/terminos-de-uso" class="self-center">{{ t('footer.legal.termsOfUse') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/politica-de-cookies" class="self-center">{{ t('footer.legal.cookiesPolicy') }}</NuxtLinkLocale>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss">
.footer-primary {
  @media screen and (min-width: 1280px) {
    @apply gap-8 !important;
  }
}
</style>