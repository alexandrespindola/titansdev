<template>
  <CommonProgressScroll />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Team />
      </main>
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/dark/team/Header';
import Team from '@/components/dark/team/Team';

useHead({
  title: 'Equipo',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
