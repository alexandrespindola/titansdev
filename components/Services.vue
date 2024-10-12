<template>
  <section class="services-crev section-padding" data-scroll-index="1">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Nuestras Especialidades</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="font-semibold tracking-[1px] uppercase">
            Qué <span class="font-semibold"> Ofrecemos</span>
          </h2>
          <div class="ml-auto">
            <a href="/servicios" class="go-more">
              <span class="text">Ver todos los Servicios</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap gap-y-8">
        <div v-for="(item, i) in data" :key="i" class="flex  w-full md:w-1/2 lg:w-1/3">
          <div
            class="flex flex-col md:flex-row flex-grow hover  gap-4 p-4 hover:bg-gradient-to-br hover:from-green-700 hover:to-green-900 rounded-lg">
            <a :href="item.link" class="flex flex-col">
              <div class="flex flex-col justify-end w-1/5 gap-4">
                <span class="num fz-20">.{{ item.number }}</span>
                <div class="">
                  <img :src="item.img" alt="" />
                </div>
              </div>
              <div class="flex flex-col gap-2 align-items-start w-4/5 flex-grow">
                <h5 class="text-2xl min-h-16 mt-4">{{ item.title }}</h5>
                <div class="flex-grow flex flex-col">
                  <p class="mb-4 text-base">{{ item.desc }}</p>
                </div>
                <div class="flex flex-row gap-x-2 mt-auto">
                  <span>Saber más</span>
                  <span class="icon ti-arrow-top-right"></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services.json';
</script>

<style scoped>
/* Adicione qualquer estilo adicional aqui, se necessário */
</style>