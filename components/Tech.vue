<template>
  <section class="clients-carso py-24">
    <div class="container">
      <div class="sec-bottom flex flex-row flex-wrap mb-40">
        <div class="main-bg d-flex align-items-center">
          <h6 class=" text-sm fw-400 text-center p-2">
            Utilizamos <span class="fw-600">más de 30 herramientas y tecnologias modernas</span>
          </h6>
        </div>
      </div>
      <div class="container flex flex-row flex-wrap justify-center gap-8 max-w-6xl">
        <div v-for="(item, i) in data" :key="i" class="w-20 md:w-28" :title=item.title>
          <div @click="handleClick(i)" @mouseenter="handleMouseEnter(i)" @mouseleave="handleMouseLeave(i)">
            <img :src="item.img" alt="" :class="getGrayscaleClass(i)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import data from '@/data/tech.json';

const grayscaleStates = ref(data.map(() => true));
let hasPointer = false;

onMounted(() => {
  hasPointer = window.matchMedia('(pointer: fine)').matches;
});

function handleClick(index) {
  if (!hasPointer) { // Verifica se o dispositivo não tem ponteiro
    grayscaleStates.value[index] = !grayscaleStates.value[index];
  }
}

function handleMouseEnter(index) {
  if (hasPointer) { // Verifica se o dispositivo tem ponteiro
    grayscaleStates.value[index] = false;
  }
}

function handleMouseLeave(index) {
  if (hasPointer) { // Verifica se o dispositivo tem ponteiro
    grayscaleStates.value[index] = true;
  }
}

function getGrayscaleClass(index) {
  return grayscaleStates.value[index]
    ? 'grayscale transition-all duration-300'
    : 'grayscale-0 transition-all duration-300';
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
</style>