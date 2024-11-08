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

<script setup>
useHead({
  title: 'TitansDev | Agencia Digital',
});

useSitemap({
  videos: [
    {
      thumbnail_loc: 'https://res.cloudinary.com/xmfm6mhw3gwctndtcubgx2rptnae/video/upload/w_640,h_360,c_fill,q_auto,f_auto/so_0/video-notebook-streaming_jxwrof.jpg',
      title: 'Video de Notebook',
      description: 'Video de Notebook',
      content_loc: 'https://res.cloudinary.com/xmfm6mhw3gwctndtcubgx2rptnae/video/upload/v1234567890/video-notebook-streaming_jxwrof.mp4',
      player_loc: 'https://titansdev.com',
      duration: '8',
      publication_date: '2024-11-08',
      family_friendly: 'yes',
      category: 'Tecnología',
      tag: 'Desarrollo Web',
      restriction: 'IE country=España',
    },
  ],
})
</script>
