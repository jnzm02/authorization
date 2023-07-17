import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
// import router from './router'

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App)


router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        next({ name: 'profile' });
    } else {
        next();
    }
});

app.use(createPinia())
app.use(router)

app.mount('#app')
