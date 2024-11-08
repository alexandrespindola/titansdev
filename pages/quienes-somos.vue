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

useSeoMeta({
  title: `Quiénes Somos | ${companyName}`,
});
</script>
