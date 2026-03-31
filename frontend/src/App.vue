<template>
  <!-- BACKGROUND (isolé) -->
  <div class="app-background">
    <div class="background-blobs"></div>
    <div class="background-veil"></div>
    <div class="background-noise"></div>
  </div>

  <!-- APP -->
  <div class="app-layout">
    <AppHeader />

    <main class="app-main">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

// Composable building
import { ComposableRegistry } from './composables/composableRegistry'

new ComposableRegistry()
</script>

<style lang="scss">
@use '@/assets/scss/layout.scss' as *;

/* =========================
   BACKGROUND ROOT
========================= */
.app-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* =========================
   APP LAYOUT
========================= */
.app-layout {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
}
</style>
