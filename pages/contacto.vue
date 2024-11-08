<template>
  <main class="main-bg">
    <ContactHeader />
    <ContactContent />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

useSeoMeta({
  title: `Contacto | TitansDev ${companyName}`,
});
</script>
