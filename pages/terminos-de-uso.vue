<template>
  <main class="flex flex-col items-center content-center policies">
    <div class="max-w-3xl">
      <ContentDoc path="/terminos-de-uso" />
    </div>
  </main>
</template>

<script lang="ts" setup>

defineI18nRoute({
  paths: {
    es: '/terminos-de-uso',
    en: '/terms-of-use',
    de: '/nutzungsbedingungen',
  }
})

useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>