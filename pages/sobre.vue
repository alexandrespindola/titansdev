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
        <Testimonials />
        <Team />
        <Blog />
      </main>
      <FooterSecondary />
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/dark/about/Header';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Navbar from '@/components/dark/creative-agency/Navbar';
import Intro from '@/components/dark/about/Intro';
import Marquee from '@/components/dark/about/Marquee';
import Intro2 from '@/components/dark/about/Intro2';
import Testimonials from '@/components/dark/about/Testimonials';
import Team from '@/components/dark/about/Team';
import Blog from '@/components/dark/about/Blog';
import { onMounted } from 'vue';
import FooterSecodary from '~/components/FooterSecondary.vue';
import FooterSecondary from '~/components/FooterSecondary.vue';

useHead({
  title: 'Sobre Nosotros',
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
