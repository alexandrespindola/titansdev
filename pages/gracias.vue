<template>
  <main class="main-bg">
    <Gracias />
  </main>
</template>

<script lang="ts" setup>

const { t } = useI18n()

defineI18nRoute({
  paths: {
    es: '/gracias',
    en: '/thank-you',
    de: '/danke',
  }
})

useSeoMeta({
  title: `${t('pageThankYou.seo.title')} | TitansDev`,
  robots: 'noindex, nofollow',
});
</script>
