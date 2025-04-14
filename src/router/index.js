import { createRouter, createWebHistory } from 'vue-router'
import CustomerView from '@/views/CustomerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'customer-list',
      component: CustomerView,
      props: {
        title: 'Customer'
      }
    },
    {
      path: '/add-customer',
      name: 'add-customer',
      component: () => import('../views/AddCustomerView.vue'),
      props: {
        title: 'Add Customer'
      }
    },
    {
      path: '/edit-customer/:id',
      name: 'edit-customer',
      component: () => import('../views/EditCustomerView.vue'),
      props: {
        title: 'Edit Customer'
      }
    }
  ]
})

export default router
