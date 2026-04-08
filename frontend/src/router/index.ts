import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import ServicePage from '@/pages/ServicePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/prestations/:id',
    name: 'services',
    component: ServicePage
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
