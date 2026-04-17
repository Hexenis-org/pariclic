<template>
  <div v-if="packages" class="section container">
    <div class="packages">
      <div v-for="p in packages" :key="p.name" class="card">
        <h3>{{ p.name }}</h3>
        <span class="price">{{ p.price }}</span>

        <ul>
          <li v-for="d in p.details" :key="d">{{ d }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PackageType } from './data'

defineProps<{ packages: PackageType[] }>()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/layout.scss' as *;
@use '@/assets/scss/palette.scss' as *;

.packages {
  display: flex;
  justify-content: center;
  gap: $space-lg;
  flex-wrap: wrap;
}

.card {
  width: 260px;
  padding: $space-lg;

  border: 1px solid var(--border-subtle);
  border-radius: $radius-lg;

  background: var(--surface-1);

  display: flex;
  flex-direction: column;
  gap: $space-sm;
}

.card ul {
  margin-top: $space-sm;
  display: flex;
  flex-direction: column;
  gap: $space-xs;
}

.card h3 {
  color: var(--color-primary);
}
</style>
