<template>
  <section class="about container">
    <div class="about-content">
      <!-- IMAGE -->
      <div class="about-image">
        <img :src="data.image" alt="Photographe" />
      </div>

      <!-- TEXTE -->
      <div class="about-text">
        <h2>{{ data.title }}</h2>

        <span class="eyebrow">À propos</span>
        <p>
          {{ data.intro }}
        </p>
        <p>
          {{ data.vision }}
        </p>

        <span class="signature"> — {{ data.signature }} </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aboutData as data } from './data'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/layout.scss' as *;

.about {
  padding: $space-2xl 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $space-xl;
  align-items: center;
}

.about-image {
  aspect-ratio: 4 / 3;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 2%;
}
/* TEXTE */
.about-text {
  display: flex;
  flex-direction: column;
  gap: $space-md;
}

h2 {
  font-size: 2.2rem;
}

p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.signature {
  margin-top: $space-md;
  font-style: italic;
  color: var(--text-muted);
}

.eyebrow {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}
</style>
