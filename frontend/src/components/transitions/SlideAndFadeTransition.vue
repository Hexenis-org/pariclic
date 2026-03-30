<template>
  <transition :name="transitionName" mode="out-in">
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  direction: 'next' | 'prev'
}>()

const transitionName = computed(() => `slide-${props.direction}`)
</script>

<style scoped lang="scss">
/* NEXT */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: all 0.6s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

/* PREV */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.6s ease;
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
