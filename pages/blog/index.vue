<template>
  <CommonProgressScroll />
  <Navbar />
  <main class="main-bg">
    <BlogHeader />
    <BlogList />
  </main>
  <FooterPrimary />
</template>

<script setup>
useHead({
  title: 'Blog | TitansDev',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>
