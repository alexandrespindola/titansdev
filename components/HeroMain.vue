<template>
  <header class="startup-header" data-scroll-index="0">
    <div class="valign relative hidden overflow-auto">
      <video autoplay muted loop playsinline class="video-background">
        <source src="https://res.cloudinary.com/xmfm6mhw3gwctndtcubgx2rptnae/video/upload/video-background-hero-480_vzujok.mp4" type="video/mp4" />
        Su navegador no soporta el elemento de vídeo.
      </video>
      <div class="video-overlay"></div>
      <div class="container h-screen flex flex-col justify-center p-4 md:max-w-2xl lg:max-w-4xl">
        <div>
          <div>
            <div class="flex flex-row">
              <div class="w-full flex flex-col text-center items-center gap-4">
                <h1 class="text-4xl font-semibold uppercase md:text-4xl lg:text-6xl">Tecnologías modernas para su negocio
                </h1>
                <h2 class="flex flex-row text-2xl font-semibold">Soluciones asequibles para acelerar el crecimiento de pequeñas y medianas
                  empresas</h2>
                <div>
                  <UButton class="button" to="/servicios">Saber más</UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Nenhuma ação adicional necessária para carregar o vídeo
});
</script>

<style scoped>
.bg-video {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.container {
  position: relative;
  z-index: 1;
}
</style>