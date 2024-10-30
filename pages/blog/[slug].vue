<template>
  <CommonProgressScroll />
  <Navbar />
  <main class="main-bg">
    <BlogDetailsSlider :post="post" />
    <BlogDetailsContent :post="post" />
    <BlogDetailsRecent :post="post" />
  </main>
  <Contact />
  <FooterPrimary />
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
</script>