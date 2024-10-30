<template>
  <CommonProgressScroll />
  <div class="policies">
    <header>
      <Navbar />
    </header>
    <main class="flex flex-col items-center content-center">
      <div class="max-w-3xl">
        <slot />
      </div>
    </main>
    <footer>
      <FooterPrimary />
    </footer>
  </div>
</template>

<script setup>

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});
</script>

<style lang="scss">
@use "@/public/dark/assets/scss/utility/variables" as vars;

.policies {

  main {

    @apply mt-48 mb-24 px-4
  }

  h1 {
    @apply text-5xl text-center mb-12;
    color: vars.$main_color;
  }

  h2 {
    @apply text-3xl pt-8 pb-4 py-0;
  }

  h3 {
    @apply text-2xl pt-8 pb-4 py-0 italic;
  }

  .highlight {
    @apply font-bold;
  }

  ul {
    li:first-child {
      @apply mt-4;
    }
  }

  li {
    @apply pb-4;

    &::before {
      content: '•';
      @apply inline-block mr-2;
    }
  }
}
</style>