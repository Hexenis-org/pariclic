<template>
  <div class="image-wrapper">
    <img
      v-if="loaded && !error"
      :src="url"
      :alt="alt ? alt : 'Picture'"
      @load="onLoad"
      @error="onError"
    />

    <div v-else-if="!error" class="placeholder" />

    <div v-else class="fallback" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export type ImageAsset = {
  url: string
  alt?: string
}

defineProps<ImageAsset>()

const loaded = ref<boolean>(false)
const error = ref<boolean>(false)

const onLoad = () => {
  loaded.value = true
}

const onError = () => {
  error.value = true
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  display: block;
}

.placeholder {
  background: var(--surface-2);
  animation: pulse 1.5s infinite;
}
</style>
