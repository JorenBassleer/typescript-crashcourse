<template>
  <h1>Appliance form</h1>
  <form>
    <input 
      v-model="newAppliance.name"
      type="text" 
      name="name" 
    >
  </form>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import type { BaseAppliance } from '@/types/Appliance';
import type TypeOfAppliance from "@/types/TypeOfAppliance";
import type Brand from '@/types/Brand';

const chosenType : TypeOfAppliance = reactive({
  name: '',
  _id: '',
});
const chosenBrand : Brand = reactive({
  name: '',
  _id: '',
});
const newAppliance: BaseAppliance = reactive({
  _id: 'idk',
  name: '',
  details: '',
  type: chosenType,
  brand: chosenBrand,
});
</script>
