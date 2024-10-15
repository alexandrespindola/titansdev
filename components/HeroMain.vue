<template>
  <header class="startup-header" data-scroll-index="0">
    <div class="valign bg-img" data-background="/dark/assets/imgs/background/1.jpg" data-overlay-dark="5">
      <div class="container pt-40">
        <div>
          <div>
            <div class="flex flex-row">
              <div class="w-full flex flex-col text-center items-center gap-4">
                <h1 class="text-4xl font-semibold uppercase md:text-4xl lg:text-6xl">Tecnologías mmodernas para su negocio
                </h1>
                <h2 class="flex flex-row text-2xl font-semibold">Soluciones para acelerar el crecimiento de pequeñas y medianas
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