<template>
  <main class="main-bg">
    <AboutHeader />
    <AboutIntro />
    <Marquee />
    <AboutIntro2 />
    <Contact />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

defineI18nRoute({
  paths: {
    es: '/quienes-somos',
    en: '/about-us',
    de: '/uber-uns',
  }
})

useSeoMeta({
  title: `Quiénes Somos | ${companyName}`,
});
</script>
