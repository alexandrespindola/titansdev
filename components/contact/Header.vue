<template>
  <header
    class="header page-header bg-img section-padding"
    data-background="/dark/assets/imgs/header/b5.jpg"
    data-overlay-dark="8"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h1 class="fz-100 text-u">{{ $t('pageContacto.title') }}</h1>
        <div class="mt-15">
          <NuxtLink to="/">{{ $t('pageContacto.breadcrumb.home') }}</NuxtLink>
          <span class="padding-rl-20">|</span>
          <span class="main-color">{{ $t('pageContacto.breadcrumb.contact') }}</span>
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
