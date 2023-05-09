<template>
  <h1>Appliance form</h1>
  <form>
    <input 
      v-model="newAppliance.name"
      type="text" 
      name="name" 
    >
    <section
      v-if="brands.length > 0"
    >
      <article
        v-for="brand in brands"
        :key="brand._id"
      >
      </article>
    </section>
    <section v-if="typesOfAppliance.length > 0">
      <article
        v-for="typeOfAppliance in typesOfAppliance"
        :key="typeOfAppliance._id"
      >
      </article>
    </section>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { BaseAppliance } from '@/types/Appliance';
import type { BaseTypeOfAppliance} from "@/types/TypeOfAppliance";
import type { BaseBrand } from '@/types/Brand';
import { storeToRefs } from 'pinia'
import { useBrandStore } from '@/stores/brand';
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance';

const typeOfApplianceStore = useTypeOfApplianceStore();
const brandStore = useBrandStore();

const { typesOfAppliance } = storeToRefs(typeOfApplianceStore);
const { brands } = storeToRefs(brandStore);

const chosenType = ref<BaseTypeOfAppliance>({
  name: '',
});
const chosenBrand = ref<BaseBrand>({
  name: '',
});
const newAppliance = ref<BaseAppliance>({
  name: '',
  details: '',
  brand: '',
  type: '',
});
</script>
