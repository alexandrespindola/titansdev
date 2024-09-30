<template>
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Services />
        <Process />
        <Testimonials />
        <FAQS />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/dark/modern-agency/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import Navbar from '@/components/dark/creative-agency/Navbar';
import Testimonials from '@/components/dark/FAQS/Testimonials';
import Header from '@/components/dark/services-details/Header';
import Services from '@/components/dark/services-details/Services';
import Process from '@/components/dark/services-details/Process';
import FAQS from '@/components/dark/services-details/FAQS';
import { onMounted } from 'vue';

useHead({
  title: 'Servicio',
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
