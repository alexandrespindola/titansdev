<template>
  <slot />
</template>

<script setup>

onMounted(() => {
  const script = document.createElement('script');
  script.src = '//tag.goadopt.io/injector.js?website_code=ab2eb4b2-28e0-4ac0-9aa2-1318cc77567c';
  script.className = 'adopt-injector';
  script.async = true;
  document.head.appendChild(script);
});
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>