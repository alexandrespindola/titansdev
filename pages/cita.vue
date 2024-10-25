<template>
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Cita />
      </main>
      <FooterPrimary />
    </div>
  </div>
</template>
<script setup>

useHead({
  title: 'Cita Reservada',
  
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
