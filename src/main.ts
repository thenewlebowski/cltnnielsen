import './assets/main.css'

import { createApp } from 'vue'
import { pinia } from '@/store'
import router from '@/router'
import axios from '@/axios'
import App from './App.vue'

createApp(App).use(router).use(pinia).use(axios).mount('#app')
