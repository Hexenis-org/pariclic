<template>
  <div class="slide">
    <div class="content">
      <div class="text">
        <span class="eyebrow">{{ category.tagline }}</span>
        <h1>{{ category.title }}</h1>
        <p v-if="category.description">
          {{ category.description }}
        </p>
      </div>

      <div class="images">
        <img
          v-for="(img, index) in category.images.slice(0, 3)"
          :key="img.src"
          :src="img.src"
          :alt="img.alt"
          :class="`img-${index}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: {
    tagline: string
    title: string
    description?: string
    images: { src: string; alt: string }[]
  }
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;

.slide {
  display: flex;
  align-items: center;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: $space-xl;
  align-items: center;
}

/* TEXT */
.text {
  max-width: 500px;
}

.eyebrow {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: $space-sm;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: $space-sm;
  color: var(--text-primary);
}

p {
  color: var(--text-secondary);
}

/* IMAGES */
.images {
  position: relative;
  width: 40rem;
  height: 20rem;
}

.images img {
  position: absolute;

  width: 18rem;
  height: 12rem;

  object-fit: cover;
  border-radius: $radius-lg;

  border: 1px solid var(--border-subtle);
  box-shadow: $shadow-lg;

  transition: all $transition-fast;
}

/* éventail asymétrique */
.img-0 {
  top: 6rem;
  left: 0;
  transform: rotate(-12deg);
  z-index: 1;
}

.img-1 {
  top: 1.5rem;
  left: 11rem;
  transform: rotate(-2deg) scale(1.05);
  z-index: 3;
}

.img-2 {
  top: 5rem;
  left: 24rem;
  transform: rotate(9deg);
  z-index: 2;
}

.images img:hover {
  transform: translateY(-6px) scale(1.05);
  border-color: var(--color-primary);
}
</style>
