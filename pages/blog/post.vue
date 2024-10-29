<template>
  <CommonProgressScroll />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <BlogDetailsSlider />
        <BlogDetailsBlog />
        <BlogDetailsRecent />
      </main>
      <FooterPrimary />
    </div>
  </div>
</template>
<script setup>

useHead({
  title: 'Post',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

</script>
