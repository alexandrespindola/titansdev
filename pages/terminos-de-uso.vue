<template>
  <main class="policies flex flex-col items-center content-center">
    <div class="max-w-3xl">
      <ContentDoc path="/terminos-de-uso" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

useSeoMeta({
  title: `Términos de Uso | ${companyName}`,
  robots: 'noindex, nofollow',
});
</script>