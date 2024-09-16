// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../HomePage.vue';


import HelloWorld from '../HelloWorld.vue';



const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
