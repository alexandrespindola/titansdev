<template>
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <p>{{ data.description }}</p>
    <ContentRenderer :value="data" />
  </div>
  <div v-else>
    Carregando serviços...
  </div>
</template>

<script setup>
const { data } = await useAsyncData('servicesContent', () => queryContent('/services').findOne())
</script>

<style scoped>
</style>