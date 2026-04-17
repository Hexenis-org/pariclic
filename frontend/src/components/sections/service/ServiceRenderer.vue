<template>
  <section class="service">
    <ServiceHero :data="data" />

    <ServiceGallery :images="data.gallery" />

    <ServiceIncludes :items="data.includes" />

    <ServicePackageCards v-if="data.packages" :packages="data.packages" />

    <ServiceCTA />
  </section>
</template>

<script setup lang="ts">
import type { ServiceData } from './data'

import ServiceHero from './ServiceHero.vue'
import ServiceGallery from './ServiceGallery.vue'
import ServiceIncludes from './ServiceIncludes.vue'
import ServiceCTA from './ServiceCTA.vue'
import ServicePackageCards from './ServicePackageCards.vue'

defineProps<{ data: ServiceData }>()
</script>

<style lang="scss" scoped>
.service {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
