<template>
  <section class="services-crev section-padding" data-scroll-index="1">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Nuestras Especialidades</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="font-semibold tracking-[1px] uppercase">
            Qué <span class=" font-semibold"> Ofrecemos</span>
          </h2>
          <div class="ml-auto">
            <a href="/servicios" class="go-more">
              <span class="text">Ver todos los Servicios</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, i) in data" :key="i" class="col-lg-6">
          <div class="item-box mb-30">
            <div class="d-flex align-items-end">
              <div>
                <span class="num fz-20">.{{ item.number }}</span>
                <div class="icon mr-80">
                  <img :src="item.img" alt="" />
                </div>
              </div>
              <div>
                <h5 class="text-2xl">{{ item.title }}</h5>
                <div class="mt-4">
                  <p class=" mb-8 text-base">{{ item.desc }}</p>
                </div>
                <a :href="item.link">
                  <span>Saber más</span>
                  <span class="icon ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services.json';
</script>
