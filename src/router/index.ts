import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/Products.vue')
    },
    {
      path: '/myCart',
      name: 'myCart',
      component: () => import('@/views/MyCart.vue')
    }
  ]
})

export default router
