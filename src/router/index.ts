import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'index', component: () => import('@/views/index.vue') },
  { path: '/detail', name: 'detail', component: () => import('@/views/detail.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
