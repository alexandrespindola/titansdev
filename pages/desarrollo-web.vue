<template>
  <CommonProgressScroll />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <ServicesDetailsHeader />
        <ServicesDetailsServices />
        <ServicesDetailsProcess />
        <ServicesDetailsFAQS />
        <Contact/>
      </main>
      <FooterPrimary />
    </div>
  </div>
</template>
<script setup>

useHead({
  title: 'Desarrollo Web | TitansDev',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
