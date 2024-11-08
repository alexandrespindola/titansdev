<template>
  <Interactive />
  <DarkShowcaseFullscreenHeader />
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Showcase',
  robots: 'noindex, nofollow',
});

/* onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
}); */
</script>
