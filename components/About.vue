<template>
  <section class="about" data-scroll-index="2">
    <div class="container section-padding bord-thin-top">
      <div class="flex flex-row flex-wrap justify-center gap-8">
        <div class="w-full xl:w-[48%]">
          <div class="flex flex-col cont">
            <h6 class="sub-title main-color mb-15">{{ t('pageHome.sessionAbout.subtitle') }}</h6>
            <h3>
              {{ t('pageHome.sessionAbout.title') }}
            </h3>
            <div class="mt-4 d-flex align-items-end gap-x-8">
              <div class="hidden sm:block">
                <NuxtLinkLocale to="/quienes-somos" class="d-flex align-items-end">
                  <span class="sub-title nowrap">{{ t('pageHome.sessionAbout.aboutUs') }}</span>
                  <span class="fz-70 line-height-45 ti-arrow-top-right"></span>
                </NuxtLinkLocale>
              </div>
              <p>
                {{ t('pageHome.sessionAbout.description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-2/3 xl:w-[48%]">
          <div class="img-vid">
            <NuxtImg src="/dark/assets/imgs/intro/intro-touchscreen-plant.webp" alt="" />
            <div class="curv-butn main-bg">
              <div class="icon">
                <i class="fas fa-play"></i>
              </div>
              <div class="shap-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"></path>
                </svg>
              </div>
              <div class="shap-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>