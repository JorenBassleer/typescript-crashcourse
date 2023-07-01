<template>
  <section>
    <h2>Brand Form</h2>
    <form v-if="!isSubmitting" @submit="handleFormSubmit">
      <input v-model="newBrand.name" />
    </form>
    <section v-else>Is submitting...</section>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useBrandStore } from '@/stores/brand';
import type { BaseBrand } from '@/types/Brand';

const newBrand = ref<BaseBrand>({
  name: ''
});
const isSubmitting = ref<Boolean>(false);
const brandStore = useBrandStore();
const handleFormSubmit = async (): Promise<void> => {
  isSubmitting.value = true;
  try {
    brandStore.createBrand(newBrand.value);
    // Notify user
  } catch (error) {
    //
  } finally {
    isSubmitting.value = false;
  }
};
</script>
