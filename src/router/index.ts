import { createRouter, createWebHistory } from 'vue-router'
import { useCurrentUser } from 'vuefire'

const ActionView = () => import('@/views/ActionView.vue')
const AuthView = () => import('@/views/AuthView.vue')
const HomeView = () => import('@/views/HomeView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/actions',
      name: 'Actions',
      component: ActionView
    },
    {
      path: '/auth',
      name: 'Auth',
      beforeEnter: () => {
        if (useCurrentUser()) router.push('/profile')
      },
      component: AuthView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: (to) => {
        return { path: '/' }
      }
    }
  ]
})

export default router
