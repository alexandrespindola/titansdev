<template>
  <main class="main-bg">
    <Gracias />
  </main>
</template>

<script lang="ts" setup>

defineI18nRoute({
  paths: {
    es: '/gracias',
    en: '/thank-you',
    de: '/danke',
  }
})

useSeoMeta({
  title: 'Gracias!',
  robots: 'noindex, nofollow',
});
</script>
