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
import type Appliance from '@/types/Appliance';
import type TypeOfAppliance from "@/types/TypeOfAppliance";
import type Brand from '@/types/Brand';

const chosenType : TypeOfAppliance = reactive({
  name: '',
  _id: '',
  createdAt: new Date(),
  updatedAt: new Date(),
});
const chosenBrand : Brand = reactive({
  name: '',
  _id: '',
  createdAt: new Date(),
  updatedAt: new Date(),
});
const newAppliance: Appliance = reactive({
  _id: 'idk',
  name: '',
  details: '',
  type: chosenType,
  brand: chosenBrand,
});
</script>
