import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/counter',
    name: 'VuexCounter',
    component: () => import('@/components/vuex/VuexCounter.vue'),
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () => import('@/components/Employees.vue'),
  },
  {
    path: '/users',
    name: 'UserList',
    component: () => import('@/components/UserList.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
});

export default router;
