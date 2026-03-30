import { createApp } from 'vue'
import '@/assets/scss/base.scss'
import '@/assets/scss/palette.scss'
import '@/assets/scss/layout.scss'
import App from './App.vue'
import router from '@/router/index.ts'

createApp(App).use(router).mount('#app')
