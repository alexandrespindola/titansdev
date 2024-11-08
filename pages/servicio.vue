<template>
  <main class="main-bg">
    <ServicesDetailsHeader />
    <ServicesDetailsServices />
    <ServicesProcess />
    <ServicesDetailsFAQS />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

useSeoMeta({
  title: `Servicio | ${companyName}`,
  robots: 'noindex, nofollow',
});
</script>
