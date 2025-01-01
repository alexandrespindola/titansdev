<template>
  <main class="main-bg">
    <ServicesHeader />
    <ServicesSpecialize />
    <Marquee />
    <ServicesSolutions />
    <ServicesProcess />
    <Contact />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

defineI18nRoute({
  paths: {
    es: '/servicios',
    en: '/services',
    de: '/dienstleistungen',
  }
})

useSeoMeta({
  title: `Servicios | ${companyName}`
})
</script>
