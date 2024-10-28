<template>
  <CommonProgressScroll />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Slider />
        <Blog />
        <Recent />
      </main>
      <FooterTertiary />
    </div>
  </div>
</template>
<script setup>
import Recent from '@/components/dark/blog-details/Recent';
import Blog from '@/components/dark/blog-details/Blog';
import Slider from '@/components/dark/blog-details/Slider';

useHead({
  title: 'Post',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
