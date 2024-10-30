<template>
  <main class="main-bg">
    <Header />
    <Portfolio />
  </main>
</template>

<script setup>
import Header from '@/components/dark/portfolio/Header';
import Portfolio from '@/components/dark/portfolio/Portfolio';

useHead({
  title: 'Portafolio',
});
</script>
