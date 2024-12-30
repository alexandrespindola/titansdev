<template>
  <header
    class="header page-header bg-img section-padding"
    data-background="/dark/assets/imgs/header/b5.jpg"
    data-overlay-dark="9"
  >
    <div class="container pt-100">
      <div class="text-center">
        <h1>CREACIÓN DE PÁGINAS WEB</h1>
        <div class="mt-15">
          <NuxtLinkLocale to="/">Home</NuxtLinkLocale>
          <span class="padding-rl-20">|</span>
          <NuxtLinkLocale to="/servicios">Servicios</NuxtLinkLocale>
          <span class="padding-rl-20">|</span>
          <span class="main-color">Páginas Web</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
