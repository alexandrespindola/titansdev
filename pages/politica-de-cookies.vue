<template>
  <main class="flex flex-col items-center content-center policies">
    <div class="max-w-3xl">
      <ContentDoc path="/politica-de-cookies" />
    </div>
  </main>
</template>

<script lang="ts" setup>

defineI18nRoute({
  paths: {
    es: '/politica-de-cookies',
    en: '/cookie-policy',
    de: '/cookie-richtlinie',
  }
})
useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>
