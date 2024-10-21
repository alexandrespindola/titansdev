<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg">
        <h1>{{ post.title || 'Post' }}</h1>
        <h2>{{ post.subtitle }}</h2>
        <p>{{ post.content }}</p>
        <p>{{ post.category.category }}</p>
        <p>{{ post.author.name }}</p> 
        <img v-if="post?.cover_image?.url" :src="post.cover_image.url" alt="hello">
      </main>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const post = ref(null);

const { data, error } = await useFetch(() => `${config.public.strapiUri}/api/posts`, {
  headers: {
    'Authorization': `Bearer ${config.strapiApiToken}`
  },
  params: {
    'filters[slug]': route.params.slug,
    'populate': '*',
  }
});

if (error.value) {
  console.error('Error when searching for the post:', error.value);
}

if (data.value && data.value.data && data.value.data.length > 0) {
  post.value = data.value.data[0];
  console.log('Selected post:', post.value);
} else {
  console.warn('No posts found with the slug provided');
}

useHead({
  title: post.value?.title || 'Post',
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