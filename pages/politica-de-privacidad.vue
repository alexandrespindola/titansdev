<template>
  <main class="policies flex flex-col items-center content-center">
    <div class="max-w-3xl">
      <ContentDoc path="/politica-de-privacidad" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

useSeoMeta({
  title: `Política de Privacidad | ${companyName}`,
  robots: 'noindex, nofollow',
});
</script>