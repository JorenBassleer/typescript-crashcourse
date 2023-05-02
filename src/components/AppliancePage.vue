<template>
    <div
      v-for="appliance in appliances"
      :key="appliance._id"
    >
    {{ appliance.name || 'Unknown' }}
    </div>
    <div
      v-for="appliance in fetchedAppliances"
      :key="appliance._id"
      >
  
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useApplianceStore } from '../stores/appliance';
import type Appliance from '@/types/Appliance';
import { storeToRefs } from 'pinia'

const applianceStore = useApplianceStore();

const { appliances } = storeToRefs(applianceStore);
for (const appliance in appliances.value) {
  console.log('appliances:', appliances.value);
  console.log('appliance:', appliance);
}
console.log('component appliuances:', appliances.value);
onMounted(async () => {
  await applianceStore.setAppliances();
});
</script>