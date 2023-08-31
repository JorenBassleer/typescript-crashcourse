<template>
  <section class="w-full h-full flex justify-center rounded-xl">
    <div
      class="bg-secondary rounded-xl w-1/2 shadow-2xl hover:shadow-md transition-shadow duration-300 text-gray-700 p-8"
    >
      <div class="w-full flex justify-between items-center">
        <h1 class="w-full text-center text-2xl">Current Appliance: {{ appliance.name }}</h1>
        <div class="flex justify-end">
          <BaseButton>Add</BaseButton>
        </div>
      </div>
      <section>
        <div class="flex justify-between">
          <div v-if="brand !== null" class="w-1/2">
            {{ brand.name }}
          </div>
          <div v-if="typeOfAppliance !== null" class="w-1/2">
            {{ typeOfAppliance.name }}
          </div>
        </div>
      </section>
      <section class="shadow-xl p-6 rounded-xl my-6 w-full h-96">
        <img :src="appliance.image" />
      </section>
      <section class="flex justify-end">Amount in stock ...</section>
      <section class="text-gray-700 font-thin p-4 border-2 border-black rounded-xl h-64 my-4">
        {{ appliance.details }}
      </section>
      <section
        v-show="withButtons"
        class="flex justify-between"
      >
        <BaseButton @click="emit('handleChangePage', -1)">Previous</BaseButton>
        <BaseButton @click="emit('handleChangePage', 1)">Next</BaseButton>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
import type { Appliance } from '@/types/Appliance';
import type { Brand } from '@/types/Brand';
import type { TypeOfAppliance } from '@/types/TypeOfAppliance';

interface Props{
  appliance: Appliance,
  brand?: Brand | null,
  typeOfAppliance?: TypeOfAppliance | null,
  withButtons?: boolean,
}
withDefaults(defineProps<Props>(), {
  withButtons: false,
  brand: null,
  typeOfAppliance: null,
});

const emit = defineEmits(['handleChangePage']);
</script>
