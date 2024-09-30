<template>
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Blogs />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Blogs from '@/components/dark/blog-list/Blogs';
import Footer from '@/components/dark/blog-list/Footer';
import Header from '@/components/dark/blog-list/Header';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Navbar from '@/components/dark/creative-agency/Navbar';
import { onMounted } from 'vue';

useHead({
  title: 'Blog',
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
