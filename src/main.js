import './assets/main.css'
import router from './router/index.js'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import { createPinia } from 'pinia'
const pinia = createPinia()
console.log(import.meta.env.VITE_APP_BASE_URL)
createApp(App)
    .use(router)
    .use(Notifications)
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')

