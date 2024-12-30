<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const flagMap = {
  es: '🇪🇦',
  en: '🇬🇧',
  de: '🇩🇪'
};

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
    {{ flagMap[locale.code] }}
  </NuxtLink>
</template>