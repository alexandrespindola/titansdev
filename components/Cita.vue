<template>
  <header class="header page-header-error valign">
    <div class="container">
      <div class="text-center">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="flex flex-col gap-4 mt-40 text">
              <div class=" min-h-24">
                <CommonCheckAnimationVue />
              </div>
              <h2 class="mb-10 text-6xl lg:text-7xl">{{  t('pageCitaReservada.title') }}</h2>
              <p>{{  t('pageCitaReservada.subtitle') }}</p>
              <NuxtLinkLocale to="/" class="self-center butn butn-md butn-bg main-colorbg text-dark radius-30 mt-30">
                <span class="text">{{  t('pageCitaReservada.button') }}</span>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>