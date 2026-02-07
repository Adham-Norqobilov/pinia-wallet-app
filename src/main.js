import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {createPinia} from 'pinia'


import App from './App.vue'
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'
import CompTwo from './components/CompTwo.vue'
import CompThree from './components/CompThree.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router);
app.component('comp-two', CompTwo)
app.component('comp-three', CompThree)
app.mount('#app')