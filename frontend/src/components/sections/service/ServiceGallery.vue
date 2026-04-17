<template>
  <div class="section container">
    <div class="gallery">
      <div v-for="img in images" :key="img" class="gallery-item">
        <BaseImage v-if="img" :url="img" />
        <div v-else class="placeholder" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseImage from '@/components/common/BaseImage.vue'

defineProps<{ images: string[] }>()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/layout.scss' as *;
@use '@/assets/scss/palette.scss' as *;

.gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: $space-md;
}

/* ITEM */
.gallery-item {
  position: relative;
  overflow: hidden;

  border-radius: $radius-lg;

  cursor: pointer;

  /* hauteur par défaut */
  grid-column: span 4;
  aspect-ratio: 4 / 3;
}

/* Variations pour casser la monotonie */
.gallery-item:nth-child(5n) {
  grid-column: span 6;
  aspect-ratio: 16 / 9;
}

.gallery-item:nth-child(7n) {
  grid-column: span 3;
  aspect-ratio: 3 / 4;
}

/* IMAGE */
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform $transition-fast ease;
}

/* HOVER */
.gallery-item:hover img {
  transform: scale(1.05);
}

/* OVERLAY HOVER */
.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.2);
  opacity: 0;

  transition: opacity $transition-fast ease;
}

.gallery-item:hover::after {
  opacity: 1;
}

@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(6, 1fr);
  }

  .gallery-item {
    grid-column: span 3;
  }

  .gallery-item:nth-child(5n),
  .gallery-item:nth-child(7n) {
    grid-column: span 3;
  }
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-item {
    grid-column: span 1;
  }
}
</style>
