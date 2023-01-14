import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import SobreView from './views/SobreView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/sobre',
    name: 'SobreView',
    component: SobreView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
