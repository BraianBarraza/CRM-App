import { createRouter, createWebHistory } from 'vue-router'
import CustomerView from '@/views/CustomerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'customer-list',
      component: CustomerView,
      props:{
        title:'Customer',
      }
    },
    {
      path: '/add-customer',
      name: 'addCustomer',
      component: () => import('../views/AddCustomerView.vue'),
      props:{
        title:'Add Customer',
      }
    },
  ],
})

export default router
