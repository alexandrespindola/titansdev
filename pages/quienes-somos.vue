<template>
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Intro />
        <Marquee />
        <Intro2 />
        <Team />
        <Contact />
      </main>
      <FooterPrimary />
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/dark/about/Header';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Intro from '@/components/dark/about/Intro';
import Intro2 from '@/components/dark/about/Intro2';
import Team from '@/components/dark/about/Team';
import { onMounted } from 'vue';

useHead({
  title: 'Quiénes Somos',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
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
