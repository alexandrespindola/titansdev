<template>
  <footer class="lg:pt-30 pb-50">
    <div class="container">
      <div class="flex flex-col flex-wrap gap-12 lg:gap-0 lg:flex-row">
        <div class="w-full order-first flex flex-col items-center lg:w-[40%] lg:flex-row lg:justify-start">
          <NuxtLink to="/">
            <img src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" class="object-contain w-[120px] h-auto">
          </NuxtLink>
        </div>
        <div class=" w-full flex flex-wrap justify-center items-center content-center order-last lg:w-[20%] lg:order-2">
          <p class="fz-14 w-full flex justify-center gap-1">
            <NuxtLink to="/" class="main-color">
              TitansDev
            </NuxtLink>
            <span>© 2024</span>
          </p>
          <p class="fz-14 self-center text-center">
            Producido con ❤️ por TitansDev
          </p>
        </div>
        <div class="w-full lg:w-[40%] lg:order-last">
          <ul class="footer-primary flex flex-col gap-2 xl:flex-row xl:justify-end">
            <a href="/politica-de-privacidad" class="self-center">Política de Privacidad</a>
            <a href="/terminos-de-uso" class="self-center">Términos de Uso</a>
            <a href="/politica-de-cookies" class="self-center">Política de Coookies</a>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-primary {
  @media screen and (min-width: 1280px) {
    @apply gap-8 !important;
  }
}
</style>