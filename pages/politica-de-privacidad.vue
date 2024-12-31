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
      return '/es/politica-de-privacidad';
    case 'en':
      return '/en/privacy-policy';
    case 'de':
      return '/de/datenschutzrichtlinie';
    default:
      return '/es/politica-de-privacidad';
  }
});

defineI18nRoute({
  paths: {
    es: '/politica-de-privacidad',
    en: '/privacy-policy',
    de: '/datenschutzrichtlinie',
  }
});

useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>