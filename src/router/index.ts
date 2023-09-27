import { createRouter, createWebHistory } from 'vue-router';
import websiteRoutes from './website/websiteRoutes';
import appRoutes from './app/appRoutes';
import { getAuth } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...websiteRoutes,
    {
      path: '/app',
      redirect: '/dashboard',
      children: [...appRoutes]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/errors/NotFound.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      router.push({ name: 'home' });
    }
  } else {
    next();
  }
});
export default router;
