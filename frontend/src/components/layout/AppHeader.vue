<template>
  <header class="app-header">
    <div class="container header-content">
      <div class="logo">Pari'Clic</div>

      <nav class="nav">
        <ThemeSwitch />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitch from '../common/ThemeSwitch.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background: transparent;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: $space-md 0;
}

.logo {
  font-weight: 600;
  font-size: 1.2rem;
}

.nav {
  display: flex;
  gap: $space-lg;
}
</style>
