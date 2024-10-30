<template>
  <CommonProgressScroll />
  <Navbar />
  <main class="main-bg">
    <ServicesDetailsHeader />
    <ServicesDetailsServices />
    <ServicesProcess />
    <ServicesDetailsFAQS />
  </main>
  <FooterPrimary />
</template>

<script setup>
useHead({
  title: 'Servicio',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
