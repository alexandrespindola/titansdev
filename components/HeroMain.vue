<template>
  <header class="startup-header">
    <div class="valign relative hidden overflow-auto bg-hero">
      <div class="container h-screen flex flex-col justify-center p-4 md:max-w-2xl lg:max-w-4xl">
        <div>
          <div>
            <div class="flex flex-row">
              <div class="w-full flex flex-col text-center items-center gap-4">
                <h1 class="text-4xl font-semibold uppercase md:text-4xl lg:text-6xl">Tecnologías modernas para su negocio</h1>
                <h2 class="flex flex-row text-2xl font-semibold">Soluciones asequibles para acelerar el crecimiento de pequeñas y medianas empresas</h2>
                <div class="flex flex-col md:flex-row gap-x-8">
                  <CommonButtonsCtaContact />
                  <CommonButtonsCtaCita />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/dark/assets/imgs/background/hero-background.webp',
    },
  ],
});
</script>

<style scoped>
.startup-header {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url('/dark/assets/imgs/background/hero-background.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.startup-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 1;
}
</style>