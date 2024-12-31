<template>
  <NuxtLinkLocale to="/contacto">
    <UButton class="flex flex-row items-center self-center gap-2 mt-4 button align-center min-h-12">
      {{ t('button.talkToUs')}}
      <UIcon name="hugeicons:user-multiple" class="w-6 h-6 text-white" />
    </UButton>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>