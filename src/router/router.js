import { createRouter, createWebHistory } from 'vue-router'

import NotFoundPage from '@/pages/NotFoundPage.vue'
import HomePage from '@/pages/HomePage.vue'
import LoginAuth from '@/Auth/LoginAuth.vue'

const routes = [
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
    { path: '/', component: HomePage },
    { path: '/login', redirect: '/auth/login' },
    { path: '/auth/login', component: LoginAuth }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router