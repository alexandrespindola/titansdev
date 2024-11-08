<template>
  <main class="main-bg">
    <ServicesDetailsHeader />
    <ServicesDetailsServices />
    <ServicesDetailsPricing />
    <ServicesDetailsProcess />
    <ServicesDetailsFAQS />
    <Contact />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

useSeoMeta({
  title: `Desarrollo Web | ${companyName}`,
});
</script>
