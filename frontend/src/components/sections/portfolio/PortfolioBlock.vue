<!-- PortfolioBlock.vue -->

<template>
  <div class="block" :class="{ reverse }">
    <!-- TEXTE -->
    <div class="content">
      <span v-if="block.highlight" class="highlight">
        {{ block.highlight }}
      </span>

      <h3>{{ block.title }}</h3>

      <p>{{ block.description }}</p>
    </div>

    <!-- IMAGES -->
    <div class="media">
      <img class="main" :src="block.images.main" />

      <div class="secondary">
        <img v-for="img in block.images.secondary" :key="img" :src="img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  block: any
  reverse?: boolean
}>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;

.block {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: $space-xl;
  align-items: center;

  &.reverse {
    grid-template-columns: 1.2fr 1fr;

    .content {
      order: 2;
    }

    .media {
      order: 1;
    }
  }
}

/* TEXTE */
.content {
  display: flex;
  flex-direction: column;
  gap: $space-md;
}

.highlight {
  font-size: 0.9rem;
  color: var(--color-primary);
}

h3 {
  font-size: 1.8rem;
}

p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* IMAGES */
.media {
  display: grid;
  grid-template-columns: 1fr;
  gap: $space-md;
}

.main {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: $radius-lg;
}

.secondary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-md;

  img {
    height: 150px;
    object-fit: cover;
    border-radius: $radius-md;
  }
}

/* Hover subtil */
img {
  transition: transform 0.4s ease;
}

img:hover {
  transform: scale(1.03);
}
</style>
