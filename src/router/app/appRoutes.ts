export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../../views/app/DashboardPage.vue')
  },
  {
    path: '/appliances',
    name: 'index-appliances',
    component: () => import('../../views/app/appliance/AppliancesPage.vue')
  },
  {
    path: '/appliance/:id',
    name: 'single-appliance',
    component: () => import('../../views/app/appliance/SingleAppliancePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/app/auth/LoginPage.vue')
  }
];
