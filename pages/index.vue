<template>
  <Navbar />
  <main class="main-bg o-hidden">
    <HeroMain />
    <Services />
    <About />
    <Marquee />
    <Portfolio />
    <Skills />
    <Tech />
    <Contact />
  </main>
  <FooterPrimary />
</template>

<script setup>
useHead({
  title: 'TitansDev | Agencia Digital',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
