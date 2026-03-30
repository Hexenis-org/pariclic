<template>
  <button class="theme-switch" @click="toggleTheme">
    <span v-if="theme === 'dark'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped lang="scss">
.theme-switch {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid var(--border-default);

  background: var(--surface-1);
  color: var(--text-primary);

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: var(--surface-2);
    border-color: var(--border-strong);
  }
}
</style>
