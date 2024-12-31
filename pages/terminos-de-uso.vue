<template>
  <main class="flex flex-col items-center content-center policies">
    <div class="max-w-3xl">
      <ContentDoc :path="currentPath" />
    </div>
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n();

const currentPath = computed(() => {
  switch (locale.value) {
    case 'es':
      return '/es/terminos-de-uso';
    case 'en':
      return '/en/terms-of-use';
    case 'de':
      return '/de/nutzungsbedingungen';
    default:
      return '/es/terminos-de-uso';
  }
});

defineI18nRoute({
  paths: {
    es: '/terminos-de-uso',
    en: '/terms-of-use',
    de: '/nutzungsbedingungen',
  }
});

useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>