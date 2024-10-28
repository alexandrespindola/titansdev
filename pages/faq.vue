<template>
  <CommonProgressScroll />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <FAQS />
        <Testimonials />
        <Blog />
      </main>
      <FooterTertiary />
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/dark/faq/Header';
import FAQS from '@/components/dark/faq/FAQS';
import Testimonials from '@/components/dark/faq/Testimonials';
import Blog from '@/components/dark/faq/Blog';

useHead({
  title: 'FAQ',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
