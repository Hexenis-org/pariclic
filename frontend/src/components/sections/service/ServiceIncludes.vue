<template>
  <div class="section container narrow">
    <h2>Ce qui est inclus</h2>

    <ul class="includes-list">
      <li v-for="item in items" :key="item">
        <span class="dot" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<style lang="scss" scoped>
.includes-list {
  align-items: center;
}

.includes-list li {
  justify-content: center;
  text-align: center;
}
</style>
