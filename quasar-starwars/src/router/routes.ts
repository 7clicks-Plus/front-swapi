import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/Films.vue'),
    children: [{ path: '', name:'films', component: () => import('pages/FilmsSection.vue') }],
  },
  {
    path: '/people',
    component: () => import('src/layouts/People.vue'),
    children: [{ path: '', name: 'people', component: () => import('pages/PeopleSection.vue') }],
  },
  {
    path: '/person/:id',
    component: () => import('src/layouts/Character.vue'),
    children: [{ path: '', name: 'characters', component: () => import('pages/CharacterSection.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
