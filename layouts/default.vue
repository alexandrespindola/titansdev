<template>
  <Navbar />
  <slot />
  <Footer />
</template>

<script setup>

onMounted(() => {
  const script = document.createElement('script');
  script.src = '//tag.goadopt.io/injector.js?website_code=ab2eb4b2-28e0-4ac0-9aa2-1318cc77567c';
  script.className = 'adopt-injector';
  script.async = true;
  document.head.appendChild(script);
});

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>