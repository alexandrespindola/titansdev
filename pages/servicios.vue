<template>
  <CommonProgressScroll />
    <Navbar />
      <main class="main-bg">
        <ServicesHeader />
        <ServicesSpecialize />
        <Marquee />
        <ServicesSolutions />
        <ServicesProcess />
        <Contact />
      </main>
      <FooterPrimary />
</template>

<script setup>
useHead({
  title: 'Servicios | TitansDev',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
