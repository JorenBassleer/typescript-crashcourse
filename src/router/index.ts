import { createRouter, createWebHistory } from 'vue-router'
import websiteRoutes from './website/websiteRoutes'
import appRoutes from './app/appRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...websiteRoutes,
    ...appRoutes,
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/errors/NotFound.vue'),
    }
  ]
})

export default router
