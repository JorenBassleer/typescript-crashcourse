export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../../views/website/AboutView.vue')
  },
  {
    path: '/links',
    name: 'links',
    component: () => import('../../views/website/LinksView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/app/auth/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../../views/app/auth/RegisterPage.vue'),
  }
];
