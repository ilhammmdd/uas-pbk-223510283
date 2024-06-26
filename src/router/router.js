import { createRouter, createWebHistory } from 'vue-router';
import Nav from '../pages/navigation.vue';

const routes = [
  { path: '/tugas', name: 'tugas', component: Nav },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;