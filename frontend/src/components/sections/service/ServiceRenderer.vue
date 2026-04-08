<template>
  <section class="service">
    <!-- HERO -->
    <div class="hero">
      <img :src="data.heroImage" />

      <div class="hero-overlay">
        <span class="tagline">{{ data.tagline }}</span>
        <h1>{{ data.title }}</h1>
        <span class="price">{{ data.startingPrice }}</span>

        <p>{{ data.description }}</p>

        <a class="cta">Réserver</a>
      </div>
    </div>

    <!-- GALLERY -->
    <div class="gallery container">
      <img v-for="img in data.gallery" :key="img" :src="img" />
    </div>

    <!-- INCLUDES -->
    <div class="includes container">
      <h2>Ce qui est inclus</h2>

      <ul>
        <li v-for="item in data.includes" :key="item">✔ {{ item }}</li>
      </ul>
    </div>

    <!-- PACKAGES -->
    <div v-if="data.packages" class="packages container">
      <div v-for="p in data.packages" :key="p.name" class="card">
        <h3>{{ p.name }}</h3>
        <span class="price">{{ p.price }}</span>

        <ul>
          <li v-for="d in p.details" :key="d">{{ d }}</li>
        </ul>
      </div>
    </div>

    <!-- CTA FINAL -->
    <div class="final-cta container">
      <h2>Prêt à réserver ?</h2>
      <a class="cta">Me contacter</a>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
</script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;

/* HERO */
.hero {
  position: relative;
  height: 70vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 4rem;
  max-width: 600px;

  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);
}

.tagline {
  color: var(--color-primary);
}

h1 {
  font-size: 3rem;
}

.price {
  margin: 1rem 0;
  color: var(--text-secondary);
}

.cta {
  margin-top: 1rem;
  width: fit-content;
}

/* GALLERY */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $space-md;
  margin: $space-2xl 0;

  img {
    height: 240px;
    object-fit: cover;
    border-radius: $radius-md;
  }
}

/* INCLUDES */
.includes ul {
  margin-top: $space-md;
  display: flex;
  flex-direction: column;
  gap: $space-xs;
}

/* PACKAGES */
.packages {
  display: flex;
  gap: $space-lg;
  margin-top: $space-xl;
}

.card {
  padding: $space-lg;
  border: 1px solid var(--border-subtle);
  border-radius: $radius-lg;
}

/* CTA FINAL */
.final-cta {
  margin: $space-2xl 0;
  text-align: center;
}
</style>
