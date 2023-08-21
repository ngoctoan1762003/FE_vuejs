import './assets/main.css'
import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'

createApp(App).use(router).use(Notifications).mount('#app')

