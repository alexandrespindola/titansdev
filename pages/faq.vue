<template>
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <FAQS />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Navbar from '@/components/dark/creative-agency/Navbar';
import Header from '@/components/dark/faq/Header';
import FAQS from '@/components/dark/faq/FAQS';
import Testimonials from '@/components/dark/faq/Testimonials';
import Blog from '@/components/dark/faq/Blog';
import { onMounted } from 'vue';

useHead({
  title: 'FAQ',
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
