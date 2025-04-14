<script setup>
import { onMounted, reactive } from 'vue'
import { FormKit } from '@formkit/vue'
import { useRouter, useRoute } from 'vue-router'
import RouterLink from '@/components/UI/RouterLink.vue'
import Heading from '@/components/UI/Heading.vue'
import customerService from '@/services/CustomerService.js'

const router = useRouter()
const route = useRoute()

const { id } = route.params
const formData  = reactive({
  name: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  company:'',
  role:'',

})

onMounted(() => {
customerService.getCustomer(id)
  .then(({data}) => {
    formData.name = data.name
    formData.lastName = data.lastName
    formData.email = data.email
    formData.phoneNumber = data.phoneNumber
  })
  .catch((error) => { console.log(error) })
})

defineProps({
  title: {
    type: String
  }
})

const handleSubmit = (data) => {

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
                 @submit="handleSubmit"
                 :value="formData">

          <FormKit type="text"
                   label="Name"
                   name="name"
                   placeholder="Customer Name"
                   validation="required"
                   v-model="formData.name"
          />
          <FormKit
            type="text"
            label="Last Name"
            name="lastName"
            placeholder="Customer Last Name"
            validation="required"
            v-model="formData.lastName"
          />
          <FormKit
            type="email"
            label="E-mail"
            name="email"
            placeholder="Client E-mail"
            validation="required|email"
            v-model="formData.email"
          />
          <FormKit
            type="text"
            label="Phone Number"
            name="phoneNumber"
            placeholder="Phone Number: XXX XXXX XXXX"
            validation="*matches:/^[0-9]{12}$/"
            :validation-messages="{ matches: `Invalid number, use ''-'' to separate the number` }"
            v-model="formData.phoneNumber"
          />
          <FormKit type="text" label="Company" name="company" placeholder="Customer Company" v-model="formData.company"/>
          <FormKit type="text" label="Role" name="role"
                   placeholder="Customer Role"
          v-model="formData.role"/>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
