<template>
  <div class="hero">
    <img v-if="data.heroImage" :src="data.heroImage" />

    <div class="hero-overlay container">
      <div class="hero-content">
        <span class="tagline">{{ data.tagline }}</span>
        <h1>{{ data.title }}</h1>

        <span class="price">{{ data.startingPrice }}</span>

        <p>{{ data.description }}</p>

        <a class="cta">Réserver</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ServiceData } from './data'

defineProps<{ data: ServiceData }>()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/layout.scss' as *;
@use '@/assets/scss/palette.scss' as *;

.hero {
  position: relative;
  width: 100%;
  min-height: 75vh;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding-bottom: $space-xl;

  overflow: hidden;
}

/* IMAGE */
.hero img {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: scale(1.05);

  z-index: 0;
}

/* OVERLAY */
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* CONTAINER */
.hero-overlay {
  position: relative;
  z-index: 2;
}

/* CONTENT */
.hero-content {
  max-width: 720px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: $space-md;

  backdrop-filter: blur(4px);
}

/* TAGLINE */
.tagline {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  color: var(--text-secondary);

  position: relative;
}

.tagline::after {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  margin: $space-xs auto 0;

  background: var(--color-primary);
}

/* TITLE */
.hero h1 {
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  line-height: 1.2;

  color: var(--text-primary);
}

/* PRICE */
.price {
  font-size: 1.1rem;
  font-weight: 500;

  color: var(--color-primary);
}

/* DESCRIPTION */
.hero p {
  max-width: 560px;

  color: var(--text-secondary);
}

/* CTA */
.cta {
  margin-top: $space-sm;

  padding: $space-sm $space-lg;

  border-radius: $radius-md;

  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));

  color: var(--text-on-primary);

  font-weight: 500;

  transition:
    transform $transition-fast,
    box-shadow $transition-fast;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: $shadow-md;
}
</style>
