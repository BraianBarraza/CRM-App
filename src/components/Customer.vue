<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  customer: {
    type: Object,
  },
})

defineEmits(['update-state', 'delete-customer'])

const customerName = computed(() => {
  return props.customer.name + ' ' + props.customer.lastName
})

const customerState = computed(() => {
  return props.customer.state
})
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">{{ customerName }}</p>
      <p class="text-gray-500">{{ customer.email }}</p>
      <p class="text-gray-500">{{ customer.phoneNumber }}</p>
    </td>

    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ customer.company }}</p>
      <p class="text-gray-600">{{ customer.role }}</p>
    </td>

    <td class="whitespace-nowrap px-3 py-4 text-sm">
      <button
        class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 cursor-pointer"
        :class="[customerState ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
        @click="$emit('update-state', { id: customer.id, state: customerState })"
      >
        {{ customerState ? 'Active' : 'Inactive' }}
      </button>
    </td>

    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <RouterLink
        :to="{ name: 'edit-customer', params: { id: customer.id } }"
        class="text-indigo-600 hover:text-indigo-900 mr-5"
        >Edit
      </RouterLink>

      <button class="text-red-600 hoover:text-red-900"
              @click="$emit('delete-customer', customer.id)"
      >Delete</button>
    </td>
  </tr>
</template>
