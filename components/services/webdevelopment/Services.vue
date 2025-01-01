<template>
  <section class="services-details pt-[7rem] pb-[3rem]">
    <div class="container">
      <div class="text-center sec-head mb-80">
        <div class="row justify-content-center">
            <h6 class="sub-title main-color mb-15">
              {{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.subtitle') }}
            </h6>
            <h4 class="max-w-4xl ">
              {{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.title') }}
            </h4>
        </div>
      </div>
      <div class="flex flex-col gap-8 md:flex-row">
        <div class="w-full md:w-1/3">
          <div class="relative w-full pt-[100%] overflow-hidden">
            <NuxtImg src="/dark/assets/imgs/intro/01.jpg" alt=""
              class="absolute top-0 left-0 object-cover w-full h-full rounded-3xl" />
          </div>
        </div>
        <div class="w-full md:w-2/3">
          <div class="relative w-full pt-[100%] md:pt-[50%] overflow-hidden">
            <NuxtImg src="/dark/assets/imgs/background/web-development.webp" alt=""
              class="absolute top-0 left-0 object-cover w-full h-full rounded-3xl" />
          </div>
        </div>
      </div>
      <div class="row mt-80">
        <div class="col-lg-4">
          <div class="text md-mb50">
            <p>
              {{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.content') }}
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="flex flex-col flex-wrap md:flex-row gap-y-2">
            <h4 class="w-full mb-4">{{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.benefits.title') }}</h4>
            <div class="col-md-6">   
              <ul class="rest list-arrow">
                <li class="nowrap">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.benefits.item1') }}</h6>
                </li>
                <li class="mt-10 nowrap">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">
                    {{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.benefits.item2') }}
                  </h6>
                </li>
                <li class="mt-10 nowrap">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.benefits.item3') }}</h6>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="rest list-arrow">
                <li class="nowrap">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.benefits.item4') }}</h6>
                </li>
                <li class="mt-10 nowrap">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">
                    {{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.benefits.item5') }}
                  </h6>
                </li>
                <li class="mt-10 nowrap">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ t('pageDesarrolloWeb.sessionWebDevelopmentAndLandingPages.benefits.item6') }}</h6>
                </li>
              </ul>
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