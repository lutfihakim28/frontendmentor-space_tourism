import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./pages/Home.vue')
const Destination = () => import('./pages/Destination.vue')
const Crew = () => import('./pages/Crew.vue')
const Technology = () => import('./pages/Technology.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Destination',
      path: '/destination',
      component: Destination
    },
    {
      name: 'Crew',
      path: '/crew',
      component: Crew
    },
    {
      name: 'Technology',
      path: '/technology',
      component: Technology
    }
  ]
})

export default router