import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActionView from '../views/ActionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '*',
    //   redirect: to => {
    //     return { path: '/' }
    //   },
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/actions',
      name: 'Actions',
      component: ActionView
    }
  ]
})

export default router
