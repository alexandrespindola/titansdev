<template>
  <CommonProgressScroll />
  <Navbar />
  <main class="main-bg">
    <AboutHeader />
    <AboutIntro />
    <Marquee />
    <AboutIntro2 />
    <Contact />
  </main>
  <FooterPrimary />
</template>

<script setup>
useHead({
  title: 'Quiénes Somos | TitansDev',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
