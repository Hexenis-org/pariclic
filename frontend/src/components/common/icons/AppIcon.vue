<template>
  <span class="icon-wrapper" :style="wrapperStyle">
    <component :is="iconComponent" class="icon" :style="iconStyle" />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { icons, type IconName, type IconVariant } from './icons'

const props = withDefaults(
  defineProps<{
    name: IconName
    size?: number | string
    color?: string
    variant?: IconVariant
    tone?: 'default' | 'light' | 'dark' | 'muted' | 'primary'
  }>(),
  {
    size: 18,
    variant: 'fill',
    tone: 'default'
  }
)

const iconComponent = computed(() => {
  const iconSet = icons[props.name]
  return iconSet[props.variant] ?? Object.values(iconSet)[0]
})

const resolvedColor = computed(() => {
  if (props.color) return props.color

  switch (props.tone) {
    case 'light':
      return 'var(--text-primary)'
    case 'dark':
      return 'var(--bg-main)'
    case 'muted':
      return 'var(--text-muted)'
    case 'primary':
      return 'var(--color-primary)'
    default:
      return 'currentColor'
  }
})

const resolvedSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
)

const wrapperStyle = computed(() => ({
  width: resolvedSize.value,
  height: resolvedSize.value,
  color: resolvedColor.value
}))

const iconStyle = computed(() => ({
  width: '100%',
  height: '100%'
}))
</script>

<style scoped lang="scss">
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  line-height: 0;
}

:deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}

.icon {
  display: block;
}
</style>
