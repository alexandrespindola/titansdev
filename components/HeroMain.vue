<template>
  <header>
    <div class="valign relative vh-100">
      <NuxtImg class="absolute inset-0 w-full h-full object-cover" :src="isMobile
        ? '/dark/assets/imgs/background/hero-background-dark-portrait.webp'
        : '/dark/assets/imgs/background/hero-background-dark.webp'" loading="eager" />
      <div
        class="container h-screen flex flex-col justify-center p-4 md:max-w-2xl lg:max-w-4xl absolute left-1/2 transform -translate-x-1/2">
        <div class="flex flex-row">
          <div class="w-full flex flex-col text-center items-center gap-4">
            <h1 class="hero" aria-label="Tecnologías modernas para su negocio">Tecnologías modernas para su negocio</h1>
            <h2 class="flex flex-row text-lg font-semibold">Soluciones asequibles para acelerar el crecimiento de
              pequeñas y medianas empresas</h2>
            <div class="flex flex-col md:flex-row gap-x-8">
              <CommonButtonsCtaContact />
              <CommonButtonsCtaCita />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const isMobile = computed(() => width.value <= 768)
</script>

<style lang="scss">
.hero {
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.5rem
  }
}
</style>