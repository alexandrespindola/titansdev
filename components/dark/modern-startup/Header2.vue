<template>
  <header class="startup-header" data-scroll-index="0">
    <div class="valign bg-img" data-background="/dark/assets/imgs/background/1.jpg" data-overlay-dark="5">
      <div class="container pt-40">
        <div class="caption">
          <div class="fw-600">
            <div class="flex flex-row">
              <div class="w-full flex flex-col gap-4 lg:w-1/2">
                <h1 class="text-4xl font-semibold uppercase line-height-50 md:text-6xl lg:text-8xl">Tecnologías modernas
                  para su negocio
                </h1>
                <h2 class="text-2xl font-semibold">Soluciones para acelerar el crecimiento de pequeñas y medianas
                  empresas</h2>
                <div>
                  <button class="button">
                    Saber más
                  </button>
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
import loadBackgroudImages from '@/common/loadBackgroudImages';
import { onMounted } from 'vue';

onMounted(() => {
  loadBackgroudImages();
});
</script>