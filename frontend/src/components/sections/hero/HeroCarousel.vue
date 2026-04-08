<template>
  <section class="hero" @mouseenter="pause" @mouseleave="resume">
    <div class="hero-content container">
      <SlideFadeTransition :direction="direction">
        <HeroSlide :key="categoryIndex" :category="currentCategory" />
      </SlideFadeTransition>
    </div>

    <!-- 🔥 Footer UI -->
    <div class="hero-footer">
      <!-- INDICATORS -->
      <div class="indicators">
        <span
          v-for="(_, index) in heroData"
          :key="index"
          :class="{ active: index === categoryIndex }"
          @click="goTo(index)"
        />
      </div>

      <!-- CONTROLS -->
      <div class="controls">
        <div
          class="controls-wrapper"
          :class="{ paused: !isAuto || isHovered }"
          :key="progressKey"
          :style="{ '--duration': duration + 'ms' }"
        >
          <button @click="prev">‹</button>
          <button @click="toggleAuto">
            {{ isAuto ? 'Pause' : 'Play' }}
          </button>
          <button @click="next">›</button>
        </div>
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
const isHovered = ref(false)

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

const goTo = (index: number) => {
  direction.value = index > categoryIndex.value ? 'next' : 'prev'
  categoryIndex.value = index

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

const pause = () => {
  isHovered.value = true
  stopAuto()
}

const resume = () => {
  isHovered.value = false
  if (isAuto.value) startAuto()
}

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

/* 🔥 FOOTER UI */
.hero-footer {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* INDICATORS */
.indicators {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 6px;
}

.indicators span {
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background: var(--text-muted);
  opacity: 0.4;

  cursor: pointer;
  transition: all 0.25s ease;
}

.indicators span.active {
  background: var(--color-primary);
  opacity: 1;
  transform: scale(1.4);
}

.indicators span:hover {
  opacity: 0.8;
}

/* CONTROLS */
.controls {
  position: absolute;
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

/* progress bar */
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

/* 🔥 pause animation sync */
.controls-wrapper.paused::after {
  animation-play-state: paused;
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* buttons */
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
</style>
