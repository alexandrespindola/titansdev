<template>
  <footer class="sub-bg pt-30 pb-30">
    <div class="container">
      <div class="flex flex-col flex-wrap lg:flex-row">
        <div class="w-full order-first flex flex-col items-center lg:w-1/3 lg:flex-row lg:justify-start">
          <NuxtLink to="/">
            <img src="/dark/assets/imgs/logo-light.png" alt="" class="object-contain w-[120px] h-auto">
          </NuxtLink>
        </div>
        <div class=" w-full flex flex-wrap justify-center order-last lg:w-1/3 lg:order-2">
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
        <div class="w-full lg:w-1/3 lg:order-last">
          <ul class="flex flex-col gap-2 justify-center lg:flex-row">
            <NuxtLink to="/sobre" class="self-center">Sobre</NuxtLink>
            <NuxtLink to="/servicios" class="self-center">Servicios</NuxtLink>
            <NuxtLink to="/blog" class="self-center">Blog</NuxtLink>
            <NuxtLink to="/contacto" class="self-center">Contacto</NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>