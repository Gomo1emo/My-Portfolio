// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../HomePage.vue';
import ContactPage from '../ContactPage.vue';
import AboutPage from '../AboutPage.vue';
import HelloWorld from '../HelloWorld.vue';
import ProjectsPage from '../ProjectsPage.vue';


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
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
