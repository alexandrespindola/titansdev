<template>
  <main class="flex flex-col items-center content-center policies">
    <div class="max-w-3xl">
      <ContentDoc path="/politica-de-privacidad" />
    </div>
  </main>
</template>

<script lang="ts" setup>

defineI18nRoute({
  paths: {
    es: '/politica-de-privacidad',
    en: '/privacy-policy',
    de: '/datenschutz',
  }
})

useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>