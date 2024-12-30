<template>
  <section class="services-boxs section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Nuestras Especialidades</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            Qué <span class="fw-200">Ofrecemos</span>
          </h2>
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-4 pt-30">
        <div v-for="(item, i) in data" :key="i" class="w-full md:w-[45%] lg:w-[30%] min-h-96">
          <div class="flex flex-col h-full item-box bg md-mb50 rounded-xl">
            <div class="mb-4 icon opacity-5">
              <NuxtImg :src="item.img" alt=""/>
            </div>
            <h5 class="uppercase">
              {{ item.title }}
            </h5>
            <p class="flex-grow-1">{{ item.desc }}</p>
            <NuxtLinkLocale :to="item.link">
              <div class="flex flex-row gap-2 rmore lg:pt-4">
                <span class="sub-title">Saber Más</span>
                <NuxtImg
                  src="/dark/assets/imgs/arrow-right.png"
                  alt=""
                  class="ml-5 icon-img-20"
                />
              </div>
            </NuxtLinkLocale>
          </div>
        </div>
        <CommonButtonsCtaCita />
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services.json';
</script>
