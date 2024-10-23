<template>
  <transition name="fade" appear>
    <div v-if="show" class="check-animation">
      <i class="fas fa-check"></i>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const show = ref(false);

const triggerAnimation = () => {
  show.value = true;
};

onMounted(() => {
  // Usar nextTick para garantir que a animação seja aplicada após a renderização
  nextTick(() => {
    triggerAnimation();
  });
});
</script>

<style lang="scss" scoped>
.check-animation {
  color: green;
  font-size: 4em;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.30s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>