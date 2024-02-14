import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/components/Inicio.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  // Otras rutas de tu aplicación, si las tienes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
