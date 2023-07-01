<template>
  <section v-if="currentAppliance?._id" class="w-full h-full flex justify-center rounded-xl">
    <div
      class="bg-secondary rounded-xl w-1/2 shadow-2xl hover:shadow-md transition-shadow duration-300 text-gray-700 p-8"
    >
      <div class="w-full flex justify-between items-center">
        <h1 class="w-full text-center text-2xl">Current Appliance: {{ currentAppliance.name }}</h1>
        <div class="flex justify-end">
          <BaseButton>Add</BaseButton>
        </div>
      </div>
      <section>
        <div class="flex justify-between">
          <div v-if="currentBrand !== null" class="w-1/2">
            {{ currentBrand.name }}
          </div>
          <div v-if="currentTypeOfAppliance !== null" class="w-1/2">
            {{ currentTypeOfAppliance.name }}
          </div>
        </div>
      </section>
      <section class="shadow-xl p-6 rounded-xl my-6 w-full h-96">
        <img :src="currentAppliance.image" />
      </section>
      <section class="flex justify-end">Amount in stock ...</section>
      <section class="text-gray-700 font-thin">
        {{ currentAppliance.details }}
      </section>
    </div>
  </section>
  <section v-else>Sorry, we could not find the appliance you're looking for</section>
</template>
<script setup lang="ts">
import { onBeforeMount, computed } from 'vue';
import { type RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { useApplianceStore } from '@/stores/appliance';
import { useBrandStore } from '@/stores/brand';
import type { Brand } from '@/types/Brand';
import { storeToRefs } from 'pinia';
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance';
import type { Appliance } from '@/types/Appliance';
import type { TypeOfAppliance } from '@/types/TypeOfAppliance';

const applianceStore = useApplianceStore();
const brandStore = useBrandStore();
const typeOfApplianceStore = useTypeOfApplianceStore();

const { appliances } = storeToRefs(applianceStore);

const route: RouteLocationNormalizedLoaded = useRoute();
const currentAppliance = computed<Appliance | null>(() => {
  const applianceId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

  return applianceStore.searchApplianceOnId(applianceId);
});

const currentBrand = computed<Brand | null>(() => {
  return currentAppliance.value ? brandStore.searchBrandOnId(currentAppliance.value?.brand) : null;
});

const currentTypeOfAppliance = computed<TypeOfAppliance | null>(() => {
  return currentAppliance.value
    ? typeOfApplianceStore.searchTypeOfApplianceById(currentAppliance.value.type)
    : null;
});

onBeforeMount(() => {
  if (appliances.value.length === 0) applianceStore.setAppliances();
});
</script>
