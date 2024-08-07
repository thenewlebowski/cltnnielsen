import './assets/main.css'

import { createApp } from 'vue'
import { initializeApp } from 'firebase/app'
import { pinia } from '@/store'
import router from '@/router'
import axios from '@/axios'
import App from './App.vue'
import { browserLocalPersistence, getAuth } from 'firebase/auth'

const config = {
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

initializeApp(config)
await getAuth().setPersistence(browserLocalPersistence)

createApp(App).use(router).use(pinia).use(axios).mount('#app')
