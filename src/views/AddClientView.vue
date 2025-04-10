<script setup>
import { reactive } from 'vue'
import RouterLink from '@/components/UI/RouterLink.vue'
import Heading from '@/components/UI/Heading.vue'
import { FormKit } from '@formkit/vue'

defineProps({
  title: {
    type: String,
  },
})

const handleSubmit = (data)=>{
  console.log(data)
}

</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="clients">Back</RouterLink>
    </div>

    <Heading>{{ title }}</Heading>

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">

        <FormKit type="form"
                 submit-label="Add Client"
                 @submit="handleSubmit">

          <FormKit type="text"
                   label="Name"
                   name="name"
                   placeholder="Client Name"
                   validation="required"
          />
          <FormKit
            type="text"
            label="Last Name"
            name="lastName"
            placeholder="Client Last Name"
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
          <FormKit type="text" label="Company" name="company" placeholder="Client Company" />
          <FormKit type="text" label="Position" name="position" placeholder="Client Company Position" />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
