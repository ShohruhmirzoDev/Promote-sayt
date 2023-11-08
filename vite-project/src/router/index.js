import { createRouter, createWebHistory } from 'vue-router'

import HomeViews from '../views/HomeViews.vue'
import AboutViews from '../views/AboutViews.vue'
import ServicesViews from '../views/ServicesViews.vue'
import ServicesSingleViews from '../views/ServicesSingleViews.vue'
import BlogViews from '../views/BlogViews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViews
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViews
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesViews
    },
    {
      path: '/servicesSingle',
      name: 'servicesSingle',
      component: ServicesSingleViews
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogViews
    },
 
  ]
})

export default router
