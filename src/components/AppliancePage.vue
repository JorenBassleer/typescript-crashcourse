<template>
  <div style="background-color: white;">
    <div
      v-for="appliance in appliances"
      :key="appliance._id"
      style="color: black;"
    >
    {{ appliance.name || 'Unknown' }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useApplianceStore } from '../stores/appliance';
import { storeToRefs } from 'pinia'

const applianceStore = useApplianceStore();

const { appliances } = storeToRefs(applianceStore);

console.log('component appliuances:', appliances.value);
onMounted(async () => {
  await applianceStore.setAppliances();
});
</script>