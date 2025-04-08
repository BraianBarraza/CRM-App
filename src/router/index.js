import { createRouter, createWebHistory } from 'vue-router'
import ClientsView from '@/views/ClientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clients',
      component: ClientsView,
      props:{
        title:'Clients',
      }
    },
    {
      path: '/add-client',
      name: 'addClient',
      component: () => import('../views/AddClientView.vue'),
      props:{
        title:'Add Client',
      }
    },
  ],
})

export default router
