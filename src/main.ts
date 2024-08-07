import './assets/main.css'

import { createApp } from 'vue'
import { pinia } from '@/store'
import router from '@/router'
import axios from '@/axios'
import App from './App.vue'
import { VueFire, VueFireAuthWithDependencies } from 'vuefire'
import { initializeApp } from 'firebase/app'
import { initializeAnalytics } from 'firebase/analytics'
import {
  debugErrorMap,
  prodErrorMap,
  indexedDBLocalPersistence,
  browserLocalPersistence
} from 'firebase/auth'

const config = {
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}
const firebase = initializeApp(config)
initializeAnalytics(firebase)

createApp(App)
  .use(router)
  .use(pinia)
  .use(axios)
  .use(VueFire, {
    firebaseApp: firebase,
    modules: [
      VueFireAuthWithDependencies({
        dependencies: {
          errorMap: process.env.NODE_ENV !== 'production' ? debugErrorMap : prodErrorMap,
          persistence: [indexedDBLocalPersistence, browserLocalPersistence]
        }
      })
    ]
  })
  .mount('#app')
