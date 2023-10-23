import { createRouter, createWebHistory } from 'vue-router'

import HomeViews from '../views/HomeViews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViews
    },
    {
      path: '/',
      name: 'home',
      component: HomeViews
    },
 
  ]
})

export default router
