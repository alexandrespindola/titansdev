<template>
  <section class="clients-carso py-12">
    <div class="container">
      <div class="sec-bottom flex flex-row flex-wrap mb-40">
        <div class="main-bg d-flex align-items-center">
          <h6 class=" text-sm fw-400 text-center p-2">
            Utilizamos <span class="fw-600">más de 30 herramientas y tecnologias modernas</span>
          </h6>
        </div>
      </div>
      <div class="container flex flex-row flex-wrap justify-center gap-8 max-w-6xl">
        <div v-for="(item, i) in data" :key="i" class="w-20 md:w-28">
          <div @click="toggleGrayscale(i)">
            <img :src="item.img" alt="" :class="getGrayscaleClass(i)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import data from '@/data/tech.json';

const grayscaleStates = ref(data.map(() => true));

function toggleGrayscale(index) {
  if (window.innerWidth <= 768) { // Verifica se é mobile
    grayscaleStates.value[index] = !grayscaleStates.value[index];
  }
}

function getGrayscaleClass(index) {
  if (window.innerWidth <= 768) { // Verifica se é mobile
    return grayscaleStates.value[index]
      ? 'grayscale transition-all duration-300'
      : 'grayscale-0 transition-all duration-300';
  } else {
    return 'grayscale hover:grayscale-0 transition-all duration-300';
  }
}
</script>

<style lang="scss" scoped>
.grayscale {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.grayscale-0 {
  filter: grayscale(0%);
  transition: filter 0.3s ease;
}

@media (min-width: 769px) {
  .grayscale:hover {
    filter: grayscale(0%);
  }
}
</style>