<template>
  <div style="background-color: white;">
    <div
      v-for="appliance in appliances"
      :key="appliance._id"
      style="color: black;"
    >
    {{ appliance.name || 'Unknown' }}
    </div>
    <button @click="showForm = !showForm">Create Appliance</button>
    <ApplianceForm
      v-if="showForm === true" 
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useApplianceStore } from '@/stores/appliance';
import ApplianceForm from './ApplianceForm.vue';
import { storeToRefs } from 'pinia'

const applianceStore = useApplianceStore();

const { appliances } = storeToRefs(applianceStore);
const showForm = ref<Boolean>(false);
onMounted(async () => {
  if (appliances.value.length === 0) await applianceStore.setAppliances();
});
</script>