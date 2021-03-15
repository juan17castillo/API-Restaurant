import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';

const ListRestaurants = () => import('./pages/ListRestaurants.vue');

const DetailRestaurant = () => import('./pages/DetailRestaurant.vue');

const CreateRestaurant = () => import('./pages/CreateRestaurant.vue');


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/restaurants' },
    { path: '/restaurants', component: ListRestaurants },
    {
      path: '/coaches/:id',
      component: DetailRestaurant,
      props: true,
    },
    {
      path: '/register',
      component: CreateRestaurant,
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});


export default router;