<template>
  <CommonProgressScroll />
  <CommonLines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
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
    </div>
  </div>
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

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});

</script>
