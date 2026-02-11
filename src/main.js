import { createApp } from 'vue'
import router from '@/router'
import {createPinia} from 'pinia'
import Greeting from '@/components/Greeting.vue'


import i18n from '@/i18n'
import App from '@/App.vue'
// import FoodItems from '@/components/FoodItems.vue'
// import AnimalCollection from '@/components/AnimalCollection.vue'
// import CompTwo from '@/components/CompTwo.vue'
// import CompThree from '@/components/CompThree.vue'



const app = createApp(App)
const pinia = createPinia()

app.use(pinia);
app.use(router);
app.use(i18n);

// app.component('comp-two', CompTwo)
// app.component('comp-three', CompThree)
app.component('greeting', Greeting)
app.mount('#app')