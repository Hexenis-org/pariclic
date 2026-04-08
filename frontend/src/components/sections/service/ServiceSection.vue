<template>
  <ServiceRenderer v-if="service" :data="service" />
  <div v-else class="not-found">Prestation introuvable</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { services } from './data'
import ServiceRenderer from './ServiceRenderer.vue'

const route = useRoute()

const service = computed(() => {
  const id = route.params.id as string
  return services[id]
})
</script>
