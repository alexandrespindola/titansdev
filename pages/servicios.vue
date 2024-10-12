<template>
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Services />
        <Services2 />
        <Marquee />
        <Price />
        <Testimonials />
        <Process />
        <Brands />
        <Blog />
      </main>
      <FooterPrimary />
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Navbar from '@/components/dark/creative-agency/Navbar';
import Testimonials from '@/components/dark/faq/Testimonials';
import Header from '@/components/dark/services/Header';
import Services from '@/components/dark/services/Services';
import Services2 from '@/components/dark/services/Services2';
import Marquee from '@/components/dark/services/Marquee';
import Price from '@/components/dark/services/Price';
import Process from '@/components/dark/services/Process';
import Brands from '@/components/dark/services2/Brands';
import Blog from '@/components/dark/services/Blog';
import { onMounted } from 'vue';
import FooterPrimary from '~/components/FooterPrimary.vue';

useHead({
  title: 'Servicios',
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
