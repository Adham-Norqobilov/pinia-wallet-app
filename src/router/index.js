import { createRouter, createWebHistory } from 'vue-router'
import AnimalCollection from '@/components/AnimalCollection.vue';
import FoodItems from '@/components/FoodItems.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: () => import('@/pages/WalletPage.vue')},
        {path: "/posts", component: () => import('@/pages/PostsPage.vue')},
        {path: "/posts/:id", component: () => import('@/pages/PostPage.vue')},
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});

export default router;