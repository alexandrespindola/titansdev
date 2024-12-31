<template>
  <div class="flex flex-row">
    <UButton class="flex flex-row items-center self-center gap-2 mt-4 button align-center min-h-12"
      to="https://calcom.titansdev.es/empezemos/cita" target="_blank">
      {{ t('button.onlineAppointment')}}
      <UIcon name="hugeicons:cursor-pointer-02" class="w-6 h-6 text-white" />
    </UButton>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>