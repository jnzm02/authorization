
import { createRouter, createWebHistory } from 'vue-router';
import ProfileComponent from '@/components/ProfileComponent.vue';

const routes = [
  // Other routes
  { path: '/profile', name: 'profile', component: ProfileComponent },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;