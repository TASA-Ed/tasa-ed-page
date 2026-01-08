import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DownloadsView from '@/views/DownloadsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: DownloadsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
      props: route => ({ path: route.params.pathMatch })
    }
  ]
});

export default router;
