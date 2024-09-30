<template>
  <ProgressScroll />
  <Lines />
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
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/dark/blog-details/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Navbar from '@/components/dark/portfolio/Navbar';
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
  ],
  // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
