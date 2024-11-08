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

useHead({
  title: `Servicio | ${companyName}`,
});
</script>
