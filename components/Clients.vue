<template>
  <section class="pt-0 clients-carso section-padding">
    <div class="container">
      <div class="sec-bottom mb-100">
        <div class="main-bg d-flex align-items-center">
          <h6 class="fz-14 fw-400">
            Utilizamos <span class="fw-600">más de 30 herramientas y tecnologias modernas</span>
          </h6>
        </div>
      </div>
      <div class="swiper5" data-carousel="swiper" data-items="5" data-loop="true" data-space="40">
        <Swiper id="content-carousel-container-unq-clients" class="swiper-container" data-swiper="container"
          v-bind="swiperOptions">
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <NuxtImg src="/dark/assets/imgs/brands/b1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <NuxtImg src="/dark/assets/imgs/brands/b2.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <NuxtImg src="/dark/assets/imgs/brands/b3.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <NuxtImg src="/dark/assets/imgs/brands/b4.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="img icon-img-100">
                <NuxtImg src="/dark/assets/imgs/brands/b6.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

const swiperOptions = {
  speed: 500,
  loop: true,
  breakpoints: {
    // when window width is >= 640px
    500: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    }, // when window width is >= 768px
    700: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    }, // when window width is >= 1200px
    1000: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
};
</script>
