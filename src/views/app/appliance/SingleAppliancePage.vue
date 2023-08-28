<template>
  <ApplianceCard
    v-if="currentAppliance?._id && currentBrand?._id && currentTypeOfAppliance?._id"
    :appliance="currentAppliance"
    :brand="currentBrand"
    :type-of-appliance="currentTypeOfAppliance"
  />
  <section v-else>Sorry, we could not find the appliance you're looking for</section>
</template>
<script setup lang="ts">
import { onBeforeMount, computed, defineProps, withDefaults } from 'vue';
import { type RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router';
import { useApplianceStore } from '@/stores/appliance';
import { useBrandStore } from '@/stores/brand';
import type { Brand } from '@/types/Brand';
import { storeToRefs } from 'pinia';
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance';
import type { Appliance } from '@/types/Appliance';
import type { TypeOfAppliance } from '@/types/TypeOfAppliance';
import ApplianceCard from '@/components/appliance/ApplianceCard.vue';

interface Props {
  applianceId?: string | undefined,
}

const props = withDefaults(defineProps<Props>(), {
  applianceId: undefined,
});

const applianceStore = useApplianceStore();
const brandStore = useBrandStore();
const typeOfApplianceStore = useTypeOfApplianceStore();

const { appliances } = storeToRefs(applianceStore);
const { brands } = storeToRefs(brandStore);
const { typesOfAppliance } = storeToRefs(typeOfApplianceStore);

const router = useRouter();
const route: RouteLocationNormalizedLoaded = useRoute();

const currentAppliance = computed<Appliance | null>(() => {
  if (props.applianceId === undefined) {
    const applianceId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
  
    return applianceStore.searchApplianceOnId(applianceId);
  }
  return applianceStore.searchApplianceOnId(props.applianceId);;
});

const currentBrand = computed<Brand | null>(() => {
  return currentAppliance.value ? brandStore.searchBrandOnId(currentAppliance.value?.brand) : null;
});

const currentTypeOfAppliance = computed<TypeOfAppliance | null>(() => {
  return currentAppliance.value
    ? typeOfApplianceStore.searchTypeOfApplianceById(currentAppliance.value.type)
    : null;
});

const handleChangePage = (amountIncrease: number) : void => {
  const applianceId = appliances.value.findIndex((appliance) => appliance._id === currentAppliance.value?._id);
  const newLocationId = applianceId + amountIncrease;
  const pageChangeToAppliance = appliances.value[newLocationId] ?? appliances.value[0];

  router.push({ name: 'single-appliance', params: {id: pageChangeToAppliance._id } });
};

onBeforeMount(() => {
  if (appliances.value.length === 0) applianceStore.setAppliances();
  if (brands.value.length === 0) brandStore.setBrands();
  if (typesOfAppliance.value.length === 0) typeOfApplianceStore.setTypesOfAppliance();
});
</script>
