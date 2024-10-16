<template>
  <section class="team py-20">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Nuestro Equipo</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">Conoce a nuestras <span class="fw-200">leyendas</span></h2>
          
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center lg:gap-y-12">
        <div v-for="(item, i) in data" :key="i" class=" max-w-80 md:w-1/3 md:max-w-full xl:w-1/4">
          <div class="item md-mb50">
            <div class="img">
              <img :src="item.img" alt="" />
              <div class="info">
                <span class="fz-12">{{ item.subName }}</span>
                <h6 class="fz-18">{{ item.name }}</h6>
              </div>
            </div>
            <div class="social">
              <div class="links">
                <NuxtLink :to="item.social.linkedin" target="blank">
                  <i class="fab fa-linkedin"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/team.json';
</script>
