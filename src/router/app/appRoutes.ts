export default [
  {
    path: '/app',
    name: 'dashboard',
    component: () => import('../../views/app/DashboardPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/app/auth/LoginPage.vue')
  },
  {
    path: '/appliance',
    name: 'index-appliance',
    component: () => import('../../views/app/appliance/AppliancesPage.vue')
  },
  {
    path: '/appliance/:id',
    name: 'single-appliance',
    component: () => import('../../views/app/appliance/SingleAppliancePage.vue')
  },
];
