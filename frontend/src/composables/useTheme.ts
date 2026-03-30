import { ref, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const THEME_KEY = 'theme'

export function useTheme() {
  const theme = ref<Theme>('dark')

  const applyTheme = (value: Theme) => {
    document.documentElement.setAttribute('data-theme', value)
    theme.value = value
  }

  const detectSystemTheme = (): Theme => {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }

  const initTheme = () => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null

    if (saved) {
      applyTheme(saved)
    } else {
      applyTheme(detectSystemTheme())
    }
  }

  const toggleTheme = () => {
    const newTheme = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  onMounted(initTheme)

  return {
    theme,
    toggleTheme,
    applyTheme
  }
}
