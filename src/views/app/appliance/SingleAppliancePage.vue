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
          <div
            v-if="currentBrand !== null"
            class="w-1/2"
          >
            {{ currentBrand.name }}
          </div>
          <div
            v-if="currentTypeOfAppliance !== null"
            class="w-1/2"
          >
             {{ currentTypeOfAppliance.name }}
          </div>
        </div>
      </section>
    </div>
  </section>
  <section v-else>Sorry, we could not find the appliance you're looking for</section>
</template>
<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { type RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { useApplianceStore } from '@/stores/appliance'
import { type Brand, BrandSearchManager } from '@/types/Brand'
import { storeToRefs } from 'pinia'
import { ApplianceSearchManager, type Appliance } from '@/types/Appliance'
import { type TypeOfAppliance, TypeOfApplianceSearchManager } from '@/types/TypeOfAppliance'

const applianceStore = useApplianceStore()
const applianceSearcher = new ApplianceSearchManager();
const brandSearcher = new BrandSearchManager();
const typeOfApplianceSearcher = new TypeOfApplianceSearchManager();

const { appliances } = storeToRefs(applianceStore);

const route: RouteLocationNormalizedLoaded = useRoute()
const currentAppliance = computed<Appliance | null>(() => {
  const applianceId = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id; 

  return applianceSearcher.searchAppliance(applianceId);
});

const currentBrand = computed<Brand | null>(() => {
  return currentAppliance.value ? brandSearcher.searchBrand(currentAppliance.value?._id) : null;
});

const currentTypeOfAppliance = computed<TypeOfAppliance | null>(() => {
  return currentAppliance.value ? typeOfApplianceSearcher.searchTypeOfAppliance(currentAppliance.value._id) : null;
});

onBeforeMount(() => {
  if (appliances.value.length === 0) applianceStore.setAppliances()
})
</script>
