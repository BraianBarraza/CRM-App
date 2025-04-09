<script setup>
import RouterLink from '@/components/UI/RouterLink.vue'
import Heading from '@/components/UI/Heading.vue'
import { FormKit } from '@formkit/vue'

defineProps({
  title: {
    type: String
  }
})
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
        >
          <FormKit type="text"
                   label="Name"
                   placeholder="Client Name"
                   validation="required" />
          <FormKit type="text"
                   label="Last Name"
                   placeholder="Client Last Name"
                   validation="required" />
          <FormKit type="email"
                   label="E-mail"
                   placeholder="Client E-mail"
                   validation="required|email" />
          <FormKit type="text"
                   label="Phone Number"
                   placeholder="Phone Number: XXX XXXX XXXX"
                   validation="*matches:/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/"
                   :validation-messages="{matches:`Invalid number, use ''-'' to separate the number`}" />

        </FormKit>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
