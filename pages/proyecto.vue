<template>
  <CommonProgressScroll />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Challenge />
        <Works />
        <Solution />
        <Works2 />
        <Next />
      </main>
      <FooterTertiary />
    </div>
  </div>
</template>
<script setup>
import Next from '@/components/dark/project/Next';
import Challenge from '@/components/dark/project/Challenge';
import Header from '@/components/dark/project/Header';
import Solution from '@/components/dark/project/Solution';
import Works from '@/components/dark/project/Works';
import Works2 from '@/components/dark/project/Works2';
import { onMounted } from 'vue';

useHead({
  title: 'Proyecto',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ]
});

</script>
