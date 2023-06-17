<template>
  <section>
    <ApplianceListItem
      v-for="appliance in appliances"
      :key="appliance._id"
      :appliance="appliance"
    />
  </section>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue';
import ApplianceListItem from './ApplianceListItem.vue';
import type { ApplianceRecord } from '@/types/Appliance';
import { useApplianceStore } from '@/stores/appliance';
import { storeToRefs } from 'pinia';

const applianceStore = useApplianceStore();
const { appliances } = storeToRefs(applianceStore);

onBeforeMount(() => {
  if (appliances.value.length === 0) applianceStore.setAppliances();
});
</script>