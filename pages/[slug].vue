<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg">
        <h1> Ok </h1>
      </main>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

// const route = useRoute()
// route.params.slug,

const config = useRuntimeConfig()

const { data: post } = await useFetch(`${config.public.strapiUri}/api/posts`, {
  headers: {
    'Authorization': `Bearer ${config.strapiApiToken}`
  },
  params: {
    filters: {
      slug: "o-jardineiro-e-jesus"
    }
  }
})

console.log(post)

useHead({
  title: 'Post',
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>