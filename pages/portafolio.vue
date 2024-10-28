<template>
  <CommonProgressScroll />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Portfolio />
      </main>
      <FooterTertiary />
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/dark/portfolio/Header';
import Portfolio from '@/components/dark/portfolio/Portfolio';

useHead({
  title: 'Portafolio',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
