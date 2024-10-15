<template>
  <footer class="sub-bg pt-30 pb-30">
    <div class="container">
      <div class="flex flex-col flex-wrap gap-12 lg:gap-0 py-8 lg:flex-row">
        <div class="w-full order-first flex flex-col items-center lg:w-1/4 lg:flex-row lg:justify-start">
          <NuxtLink to="/">
            <img src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" class="object-contain w-[120px] h-auto">
          </NuxtLink>
        </div>
        <div class=" w-full flex flex-wrap justify-center order-last lg:w-2/4 lg:order-2">
          <p class="fz-14 w-full flex justify-center gap-1">
            <NuxtLink to="/" class="main-color">
              TitansDev
            </NuxtLink>
            <span>© 2024</span>
          </p>
          <p class="fz-14 self-center">
            Producido con ❤️ por TitansDev
          </p>
        </div>
        <div class="w-full lg:w-1/4 lg:order-last">
          <ul class="flex flex-col gap-2 justify-center lg:flex-row">
            <NuxtLink to="/quienes-somos" class="self-center">Quiénes Somos</NuxtLink>
            <NuxtLink to="/servicios" class="self-center">Servicios</NuxtLink>
            <NuxtLink to="/contacto" class="self-center">Contacto</NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>