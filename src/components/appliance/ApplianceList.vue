<template>
  <section v-if="appliances.length !== 0" class="flex gap-6">
    <ApplianceListItem
      v-for="appliance in appliances"
      :key="appliance._id"
      :appliance="appliance"
      :brands="brands"
      :types-of-appliance="typesOfAppliance"
      class="w-1/3"
    />
  </section>
  <section v-else class="w-full h-full flex items-center justify-end">
    Is loading appliances....
  </section>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue';
import ApplianceListItem from './ApplianceListItem.vue';
import { useApplianceStore } from '@/stores/appliance';
import { useBrandStore } from '@/stores/brand';
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance';
import { storeToRefs } from 'pinia';

const applianceStore = useApplianceStore();
const brandStore = useBrandStore();
const typeOfApplianceStore = useTypeOfApplianceStore();

const { appliances } = storeToRefs(applianceStore);
const { brands } = storeToRefs(brandStore);
const { typesOfAppliance } = storeToRefs(typeOfApplianceStore);

onBeforeMount(() => {
  if (appliances.value.length === 0) applianceStore.setAppliances();
  if (brands.value.length === 0) brandStore.setBrands();
  if (typesOfAppliance.value.length === 0) typeOfApplianceStore.setTypesOfAppliance();
});
</script>
