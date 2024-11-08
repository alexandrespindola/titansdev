<template>
  <Interactive />
  <DarkShowcaseFullscreenHeader />
</template>

<script lang="ts" setup>
useHead({
  title: 'Showcase',
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
