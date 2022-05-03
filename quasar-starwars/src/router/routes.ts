import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/Films.vue'),
    children: [{ path: '', component: () => import('pages/FilmsSection.vue') }],
  },
  {
    path: '/people',
    component: () => import('src/layouts/People.vue'),
    children: [{ path: '', component: () => import('pages/PeopleSection.vue') }],
  },
  {
    path: '/character',
    component: () => import('src/layouts/Character.vue'),
    children: [{ path: '', component: () => import('pages/CharacterSection.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
