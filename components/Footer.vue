<template>
  <footer class="lg:pt-30 pb-50 flex flex-col gap-8">
    <div class="container">
      <div class="flex flex-col flex-wrap justify-between gap-y-8 lg:flex-row">
        <div class="w-full order-first flex flex-col items-center gap-4 lg:w-2/6 lg:justify-start lg:items-start">
          <NuxtLinkLocale to="/">
            <NuxtImg src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" class="object-contain w-[150px] h-auto"/>
          </NuxtLinkLocale>
          <p class="w-full flex flex-row font-normal text-pretty justify-start lg:pr-20">{{ t('pageHome.sessionHero.subtitle')}}</p>
        </div>
        <div class="w-full flex flex-col items-start start lg:w-1/6 lg:flex-row lg:justify-start lg:items-start">
          <ul class="flex flex-col justify-start gap-2 lg:items-start flex-grow md:flex md:gap-6 lg:gap-12">
            <NuxtLinkLocale to="/" class="menu">{{ t('header.nav.home') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/servicios" class="menu">{{ t('header.nav.services') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/quienes-somos" class="menu">{{ t('header.nav.aboutUs') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/contacto" class="menu">{{ t('header.nav.contact') }}</NuxtLinkLocale>
          </ul>
        </div>
        <div class="w-full flex flex-col items-start start lg:w-1/6 lg:flex-row lg:justify-start lg:items-start">
          <ul class="flex flex-col items-start gap-2 lg:items-start flex-grow md:flex md:gap-6 lg:gap-12">
            <NuxtLinkLocale to="/politica-de-privacidad" class="menu">{{ t('footer.legal.privacyPolicy') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/terminos-de-uso" class="menu">{{ t('footer.legal.termsOfUse') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/politica-de-cookies" class="menu">{{ t('footer.legal.cookiesPolicy') }}
            </NuxtLinkLocale>
          </ul>
        </div>
        <div class="w-full flex flex-col items-center lg:w-2/6 lg:flex-row lg:justify-end">
          <NuxtLinkLocale to="/">
            <NuxtImg src="/ayudas-promocion-del-empleo-autonomo-en-galicia.webp" alt="" class="object-contain w-[300px] h-auto" />
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex flex-col flex-wrap gap-12 lg:gap-8 lg:flex-row">
        <div class="w-full flex flex-wrap justify-center items-center content-center order-last  lg:order-2">
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