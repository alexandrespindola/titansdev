<template>
  <CommonProgressScroll />
  <Navbar />
  <main class="main-bg">
    <ContactHeader />
    <ContactContent />
  </main>
  <FooterPrimary />
</template>

<script setup>
useHead({
  title: 'Contacto | TitansDev',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
