<template>
  <header
    class="page-header bg-img section-padding"
    data-background="/dark/assets/imgs/header/bg1.jpg"
    data-overlay-dark="9"
  >
    <div class="container pt-100 pb-100">
      <div class="text-center">
        <h1 class="fz-100 text-u">{{ t('pageQuienesSomos.title') }}</h1>
        <div class="mt-15">
          <NuxtLink to="/">{{ t('pageQuienesSomos.breadcrumb.home') }}</NuxtLink>
          <span class="padding-rl-20">|</span>
          <span class="main-color">{{ t('pageQuienesSomos.breadcrumb.aboutUs') }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
const { t } = useI18n()

onMounted(() => {
  loadBackgroudImages();
});
</script>
