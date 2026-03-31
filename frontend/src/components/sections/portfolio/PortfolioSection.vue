<!-- PortfolioSection.vue -->

<template>
  <section class="portfolio container">
    <div class="portfolio-header">
      <h2>Galerie</h2>
      <p>Un aperçu de moments capturés</p>
    </div>

    <div class="blocks">
      <PortfolioBlock
        v-for="(block, index) in data"
        :key="block.id"
        :block="block"
        :reverse="index % 2 !== 0"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioBlocks as data } from './data'
import PortfolioBlock from './PortfolioBlock.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;

.portfolio {
  padding: $space-2xl 0;
}

.portfolio-header {
  margin-bottom: $space-2xl;

  h2 {
    font-size: 2.4rem;
  }

  p {
    color: var(--text-secondary);
  }
}

.blocks {
  display: flex;
  flex-direction: column;
  gap: $space-2xl;
}
</style>
