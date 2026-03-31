<template>
  <section class="hero" @mouseenter="pause" @mouseleave="resume">
    <div class="hero-content container">
      <SlideFadeTransition :direction="direction">
        <HeroSlide :key="categoryIndex" :category="currentCategory" />
      </SlideFadeTransition>
    </div>

    <div class="controls">
      <div class="controls-wrapper" :key="progressKey" :style="{ '--duration': duration + 'ms' }">
        <button @click="prev">‹</button>
        <button @click="toggleAuto">
          {{ isAuto ? 'Pause' : 'Play' }}
        </button>
        <button @click="next">›</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { heroData } from './data.ts'
import HeroSlide from './HeroSlide.vue'
import SlideFadeTransition from '@/components/transitions/SlideAndFadeTransition.vue'

const categoryIndex = ref(0)

const direction = ref<'next' | 'prev'>('next')

const isAuto = ref(true)

const duration = 4000
const progressKey = ref(0)
let timeout: number | null = null

const currentCategory = computed(() => heroData[categoryIndex.value])

const next = () => {
  direction.value = 'next'
  categoryIndex.value = (categoryIndex.value + 1) % heroData.length

  if (isAuto.value) startAuto()
}

const prev = () => {
  direction.value = 'prev'
  categoryIndex.value = (categoryIndex.value - 1 + heroData.length) % heroData.length

  if (isAuto.value) startAuto()
}

const startAuto = () => {
  stopAuto()

  progressKey.value++ // reset animation

  timeout = window.setTimeout(() => {
    next()
  }, duration)
}

const stopAuto = () => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
}

const toggleAuto = () => {
  isAuto.value = !isAuto.value
  isAuto.value ? startAuto() : stopAuto()
}

const pause = () => stopAuto()
const resume = () => isAuto.value && startAuto()

onMounted(() => {
  if (isAuto.value) startAuto()
})

onUnmounted(() => stopAuto())
</script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;

.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 46rem;
  padding: 7rem 0 5rem;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

/* 🔥 Progress bar ultra discrète */
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;

  background: var(--border-subtle);
  opacity: 0.6;
}

.progress-bar {
  height: 100%;
  width: 0%;

  background: var(--color-primary);
  opacity: 0.5;

  animation: progress linear forwards;
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* Controls */
.controls {
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.controls-wrapper {
  position: relative;

  display: flex;
  gap: $space-xs;
  padding: 6px 10px;

  border-radius: $radius-md;

  background: var(--surface-1);
  backdrop-filter: blur(10px);

  border: 1px solid var(--border-subtle);

  overflow: hidden;
}

/* 🔥 ligne animée discrète */
.controls-wrapper::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;

  height: 2px;
  width: 0%;

  background: var(--color-primary);
  opacity: 0.6;

  animation: progress var(--duration) linear forwards;

  pointer-events: none;
}

/* animation */
@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* boutons */
.controls-wrapper button {
  background: transparent;
  border: none;
  color: var(--text-muted);

  cursor: pointer;
  opacity: 0.7;

  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    color: var(--color-primary);
  }
}
.controls button {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  opacity: 0.6;

  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    color: var(--color-primary);
  }
}
</style>
