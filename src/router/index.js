import { createRouter, createWebHistory } from 'vue-router'
import ClientsView from '@/views/ClientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClientsView,
    },
    {
      path: '/add-client',
      name: 'addClient',
      component: () => import('../views/AddClientView.vue'),
    },
  ],
})

export default router
