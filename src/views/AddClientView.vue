<script setup>
 import RouterLink from '@/components/UI/RouterLink.vue'
 import Heading from '@/components/UI/Heading.vue'
 import  { FormKit } from '@formkit/vue'

 defineProps({
   title: {
     type: String,
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
      <FormKit type="form"
      >
        <FormKit type="text"
                 label="Name"
                 placeholder="Client Name"
                 help="enter the name of the new client"
                 validate="required"
                 validation-visibility="live"
                 name="clients"/>
      </FormKit>
    </div>
  </div>
</template>


