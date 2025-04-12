<script setup>
import axios from 'axios'
import { FormKit } from '@formkit/vue'
import { useRouter } from 'vue-router'
import RouterLink from '@/components/UI/RouterLink.vue'
import Heading from '@/components/UI/Heading.vue'

const router = useRouter()

defineProps({
  title: {
    type: String
  }
})

const handleSubmit = (data) => {
  axios.post('http://localhost:3000/customers', data)
    .then(response => {
      console.log(response)
      router.push({name: customer-list})
    })
    .catch(err => console.log(err))
}

</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="customer-list">Back</RouterLink>
    </div>

    <Heading>{{ title }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">

        <FormKit type="form"
                 submit-label="Add Customer"
                 @submit="handleSubmit">

          <FormKit type="text"
                   label="Name"
                   name="name"
                   placeholder="Customer Name"
                   validation="required"
          />
          <FormKit
            type="text"
            label="Last Name"
            name="lastName"
            placeholder="Customer Last Name"
            validation="required"
          />
          <FormKit
            type="email"
            label="E-mail"
            name="email"
            placeholder="Client E-mail"
            validation="required|email"
          />
          <FormKit
            type="text"
            label="Phone Number"
            name="phoneNumber"
            placeholder="Phone Number: XXX XXXX XXXX"
            validation="*matches:/^[0-9]{12}$/"
            :validation-messages="{ matches: `Invalid number, use ''-'' to separate the number` }"
          />
          <FormKit type="text" label="Company" name="company" placeholder="Customer Company" />
          <FormKit type="text" label="Position" name="position"
                   placeholder="Customer Company Position" />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
