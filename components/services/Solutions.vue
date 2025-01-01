<template>
  <section class="price-hr section-padding">
    <div class="container">
      <div class="flex flex-col items-center gap-8 lg:flex-row">
        <div class="lg:w-1/2">
          <div class="flex flex-col justify-start">
              <h6 class="sub-title main-color mb-15">
                {{ t('pageServicios.sessionWhyChooseUs.title') }} </h6>
              <div class="mt-20 text">
                <p>
                  {{ t('pageServicios.sessionWhyChooseUs.description') }}
                </p>
              </div>
              <ul class="rest list-arrow mt-30 pt-30 bord-thin-top">
                <li>
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ t('pageServicios.sessionWhyChooseUs.list.item1') }}</h6>
                </li>
                <li class="mt-10">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">
                    {{ t('pageServicios.sessionWhyChooseUs.list.item2') }}
                  </h6>
                </li>
                <li class="mt-10">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ t('pageServicios.sessionWhyChooseUs.list.item3') }}</h6>
                </li>
                <li class="mt-10">
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#40ea1e"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ t('pageServicios.sessionWhyChooseUs.list.item4') }}</h6>
                </li>
              </ul>
          </div>
        </div>
        <div class="xl:w-1/2 valign">
          <div class="flex flex-col gap-4 full-width">
            <div class="item bg-gradient-to-br from-[#141414] to-black  radius-10 d-flex align-items-center">
              <div class="type">
                <div class="mb-10 icon-img-60">
                  <NuxtImg src="/dark/assets/imgs/icon-img/shape1.png" alt="" />
                </div>
                <h5 class="fw-600">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.title') }}</h5>
              </div>
              <div class="flex flex-col gap-8 cont ml-50">
                <h6>{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.subtitle') }}</h6>
                <ul class="dot-list rest">
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.list.item1') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.list.item2') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.list.item3') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.list.item4') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.list.item5') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.list.item6') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.list.item7') }}</li>
                </ul>
                <div class="mr-auto text-center mount">
                  <div>
                    <NuxtLinkLocale to="/contacto" class="butn butn-md butn-bord radius-30">
                      <span class="fz-13">{{ t('pageServicios.sessionWhyChooseUs.cardAdvanced.cta') }}</span>
                    </NuxtLinkLocale>
                  </div>
                </div>
              </div>
            </div>
            <div class="item bg-gradient-to-br from-[#155e06] to-[#0d4602] radius-10 d-flex align-items-center">
              <div class="type">
                <div class="mb-10 icon-img-60">
                  <NuxtImg src="/dark/assets/imgs/icon-img/shape3.png" alt=""/>
                </div>
                <h5 class="fw-600">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.title') }}</h5>
              </div>
              <div class="flex flex-col gap-4 cont ml-50">
                <h6>{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.subtitle') }}</h6>
                <ul class="dot-list rest">
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.list.item1') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.list.item2') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.list.item3') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.list.item4') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.list.item5') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.list.item6') }}</li>
                  <li class="mb-10">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.list.item7') }}</li>
                </ul>
                <div class="mr-auto text-center mount">
                  <div>
                    <NuxtLinkLocale to="/contacto" class="butn butn-md butn-bord radius-30">
                      <span class="fz-13">{{ t('pageServicios.sessionWhyChooseUs.cardEnterprise.cta') }}</span>
                    </NuxtLinkLocale>
                  </div>
                </div>
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