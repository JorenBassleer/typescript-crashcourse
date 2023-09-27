<template>
  <form @submit="handleFormSubmit">
    <input v-model="newType.name">
    <button @click="handleFormSubmit">
      Submit
    </button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { BaseTypeOfAppliance } from '@/types/TypeOfAppliance';
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance';

const isSubmitting = ref<Boolean>(false);
const typeOfApplianceStore = useTypeOfApplianceStore();
const newType = ref<BaseTypeOfAppliance>({
  name: '',
});

const handleFormSubmit = async (): Promise<void> => {
  isSubmitting.value = true;
  try {
    typeOfApplianceStore.createTypeOfAppliance(newType.value);
  } catch (error) {
    //
  } finally {
    isSubmitting.value = false;
  }
};
</script>
