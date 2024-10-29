<template>
  <CommonProgressScroll />
  <CommonLines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <BlogHeader />
        <BlogList />
      </main>
      <FooterPrimary />
    </div>
  </div>
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
