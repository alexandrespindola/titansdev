<template>
  <main class="main-bg">
    <ContactHeader />
    <ContactContent />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

defineI18nRoute({
  paths: {
    es: '/contacto',
    en: '/contact',
    de: '/kontakt'
  }
})

useSeoMeta({
  title: `Contacto | TitansDev ${companyName}`,
});
</script>
