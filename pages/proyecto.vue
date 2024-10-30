<template>
  <CommonProgressScroll />
  <Navbar />
  <main class="main-bg">
    <Header />
    <Challenge />
    <Works />
    <Solution />
    <Works2 />
    <Next />
  </main>
  <FooterPrimary />
</template>

<script setup>
import Next from '@/components/dark/project/Next';
import Challenge from '@/components/dark/project/Challenge';
import Header from '@/components/dark/project/Header';
import Solution from '@/components/dark/project/Solution';
import Works from '@/components/dark/project/Works';
import Works2 from '@/components/dark/project/Works2';

useHead({
  title: 'Proyecto',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ]
});
</script>
