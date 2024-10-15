<template>
  <section class="clients-carso section-padding pt-0">
    <div class="container">
      <div class="sec-bottom flex flex-row flex-wrap mb-40">
        <div class="main-bg d-flex align-items-center">
          <h6 class=" text-sm fw-400 text-center p-2">
            Utilizamos <span class="fw-600">más de 30 herramientas y tecnologias modernas</span>
          </h6>
        </div>
      </div>
      <div class="container flex flex-row flex-wrap justify-center gap-4">
        <div v-for="(item, i) in data" :key="i" class="w-20 md:w-28">
          <div>
            <img :src="item.img" alt="" class="grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import data from '@/data/tech.json';

</script>


<style lang="scss" scoped>
.grayscale {
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }
}
</style>