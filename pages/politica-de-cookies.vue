<template>
  <main class="policies flex flex-col items-center content-center">
    <div class="max-w-3xl">
      <ContentDoc path="/politica-de-cookies" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

useSeoMeta({
  title: `Política de Cookies | ${companyName}`,
  robots: 'noindex, nofollow',
});
</script>
