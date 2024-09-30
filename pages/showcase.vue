<template>
  <Lines />
  <Navbar />
  <Interactive />
  <Header />
</template>
<script setup>
import Lines from '@/components/dark/common/Lines';
import Navbar from '@/components/dark/portfolio/Navbar';
import Interactive from '@/components/dark/interactive-full/Interactive';

useHead({
  title: 'Showcase',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
