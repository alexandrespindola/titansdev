<template>
  <main class="main-bg">
    <ServicesWebdevelopmentHeader />
    <ServicesWebdevelopmentServices />
    <ServicesWebdevelopmentPricing />
    <ServicesWebdevelopmentProcess />
    <ServicesWebdevelopmentFAQS />
    <Contact />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

defineI18nRoute({
  paths: {
    es: '/desarrollo-web',
    en: '/web-development',
    de: '/web-entwicklung',
  }
})

useSeoMeta({
  title: `Desarrollo Web | ${companyName}`,
});
</script>
