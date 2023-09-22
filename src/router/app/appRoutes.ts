export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../../views/app/DashboardPage.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/appliances',
    name: 'index-appliances',
    component: () => import('../../views/app/appliance/AppliancesPage.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/appliance/:id',
    name: 'single-appliance',
    component: () => import('../../views/app/appliance/SingleAppliancePage.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/app/auth/LoginPage.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../../views/app/auth/RegisterPage.vue'),
    meta: {
      requiresAuth: true,
    }
  }
];
