<script setup>
import { computed, onMounted, ref } from 'vue'
import CustomerService from '@/services/CustomerService.js'
import RouterLink from '@/components/UI/RouterLink.vue'
import Heading from '@/components/UI/Heading.vue'
import Customer from '@/components/Customer.vue'
import customerService from '@/services/CustomerService.js'

const customers = ref([])

onMounted(() => {
  CustomerService.getCustomers()
    .then(({data}) => {
      customers.value = data
    })
    .catch((error) => console.log('Not Data Found', error))
})

defineProps({
  title: {
    type: String,
  }
})

const customersExistence = computed(() => customers.value.length > 0)

const updateState = ({id, state}) =>{
  customerService.changeState(id, {state: !state})
    .then(()=>{
      const i = customers.value.findIndex(customer => customer.id === id)
      customers.value[i].state = !state
    })
    .catch((error) => console.log(error))
}

const deleteCustomer = (id) => {
  customerService.deleteCustomer(id)
    .then(()=>{

    })
    .catch((error) => console.log(error))
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="add-customer">
        Add Customer
      </RouterLink>
    </div>
    <Heading>{{ title }}</Heading>

    <div v-if="customersExistence" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
            <tr>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Name</th>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Company</th>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">State</th>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Actions</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Customer
              v-for="customer in customers"
              :key="customer.id"
              :customer="customer"
              @update-state="updateState"
              @delete-customer="deleteCustomer"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <p v-else class="text-center mt-10">There are no customers yet</p>
  </div>
</template>
