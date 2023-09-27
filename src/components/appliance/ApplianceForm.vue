<template>
  <section>
    <h1>Appliance form</h1>
    <form
      v-if="!isSubmitting"
      @submit.prevent="handleSubmitForm"
    >
      Name
      <input
        v-model="newAppliance.name"
        type="text"
        name="name"
      >
      Details
      <textarea v-model="newAppliance.details" />
      <section v-show="brands.length > 0">
        <select v-model="newAppliance.brand">
          <option
            v-for="brand in brands"
            :key="brand._id"
            :value="brand._id"
          >
            {{ brand.name }}
          </option>
        </select>
      </section>
      <section v-show="typesOfAppliance.length > 0">
        <select v-model="newAppliance.type">
          <option
            v-for="typeOfAppliance in typesOfAppliance"
            :key="typeOfAppliance._id"
            :value="typeOfAppliance._id"
          >
            {{ typeOfAppliance.name }}
          </option>
        </select>
      </section>
      <button type="submit">
        Submit
      </button>
    </form>
    <section v-else>
      Submitting....
    </section>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { BaseAppliance } from '@/types/Appliance';
import { storeToRefs } from 'pinia';
import { useApplianceStore } from '@/stores/appliance';
import { useBrandStore } from '@/stores/brand';
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance';

const applianceStore = useApplianceStore();
const typeOfApplianceStore = useTypeOfApplianceStore();
const brandStore = useBrandStore();

const { typesOfAppliance } = storeToRefs(typeOfApplianceStore);
const { brands } = storeToRefs(brandStore);

const isSubmitting = ref<Boolean>(false);
const newAppliance = ref<BaseAppliance>({
  name: '',
  details: '',
  brand: '',
  type: '',
});
const handleSubmitForm = async (): Promise<void> => {
  try {
    isSubmitting.value = true;
    await applianceStore.createAppliance(newAppliance.value);
  } catch (error) {
    // idk yet
  } finally {
    isSubmitting.value = false;
  }
};
</script>
<style scoped>
* {
  background-color: blue;
}
</style>
