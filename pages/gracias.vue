<template>
  <Navbar />
  <main class="main-bg">
    <Gracias />
  </main>
  <FooterPrimary />
</template>

<script setup>
useHead({
  title: 'Gracias!',

  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
