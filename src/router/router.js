import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

const routes = [
    { path: '/', component: HomePage }
]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index