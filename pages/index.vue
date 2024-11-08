<template>
  <main class="main-bg o-hidden">
    <HeroMain />
    <Services />
    <About />
    <Marquee />
    <Portfolio />
    <Skills />
    <Tech />
    <Contact />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';

useSeoMeta({
  title: `TitansDev | ${companyName}`,
});
</script>
