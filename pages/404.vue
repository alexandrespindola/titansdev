<template>
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Error />
      </main>
      <FooterTertiary />
    </div>
  </div>
</template>
<script setup>

useHead({
  title: '404 - Página no encontrada',
  
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
