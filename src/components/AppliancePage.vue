<template>
    <div
      v-for="appliance in appliances"
      :key="appliance._id"
    >
    {{ appliance.name || 'Unknown' }}
    </div>
</template>
<script setup lang="ts">
import { onMounted, type ref } from 'vue';
import { useApplianceStore } from '../stores/appliance';
import type Appliance from '@/types/Appliance';
import { storeToRefs } from 'pinia'

const applianceStore = useApplianceStore();

const appliances = storeToRefs(applianceStore).appliances as ref<Appliance[]>;

console.log('component appliuances:', appliances.value);
onMounted(async () => {
  await applianceStore.setAppliances();
});
</script>