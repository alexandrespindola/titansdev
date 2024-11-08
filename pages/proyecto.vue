<template>
  <main class="main-bg">
    <Header />
    <Challenge />
    <Works />
    <Solution />
    <Works2 />
    <Next />
  </main>
</template>

<script setup>
import Next from '@/components/dark/project/Next';
import Challenge from '@/components/dark/project/Challenge';
import Header from '@/components/dark/project/Header';
import Solution from '@/components/dark/project/Solution';
import Works from '@/components/dark/project/Works';
import Works2 from '@/components/dark/project/Works2';

useSeoMeta({
  title: 'Proyecto',
  robots: 'noindex, nofollow',
});
</script>
