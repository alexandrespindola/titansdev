<template>
  <main class="main-bg">
    <Cita />
  </main>
</template>

<script lang="ts" setup>

defineI18nRoute({
  paths: {
    es: '/cita',
    en: '/appointment',
    de: '/termin',
  }
})

useSeoMeta({
  title: 'Cita Reservada',
});
</script>
