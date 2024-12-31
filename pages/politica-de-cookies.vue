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
      return '/es/politica-de-cookies';
    case 'en':
      return '/en/cookie-policy';
    case 'de':
      return '/de/cookie-richtlinie';
    default:
      return '/es/politica-de-cookies';
  }
});

defineI18nRoute({
  paths: {
    es: '/politica-de-cookies',
    en: '/cookie-policy',
    de: '/cookie-richtlinie',
  }
});

useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>
