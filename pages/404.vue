<template>
  <main class="main-bg">
    <Error />
  </main>
</template>

<script lang="ts" setup>

defineI18nRoute({
  paths: {
    es: '/404',
    en: '/404',
    de: '/404'
  }
})

useSeoMeta({
  title: '404 | Página no encontrada',
  robots: 'noindex, nofollow',
});
</script>
