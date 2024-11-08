<template>
  <CommonProgressScroll />
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

useSeoMeta({
  title: `Servicios | ${companyName}`
})
</script>
