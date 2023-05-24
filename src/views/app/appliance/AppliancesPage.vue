<template>
  <div class="rounded">
    <div
      v-for="appliance in appliances"
      :key="appliance._id"
      style="color: black;"
    >
    <router-link :to="{ name: 'single-appliance', params: { id: appliance._id }}"></router-link>{{ appliance.name || 'Unknown' }}
    </div>
    <button
    class="rounded p-8"
    @click="showForm = !showForm">Create Appliance</button>
    <ApplianceForm
      v-if="showForm === true" 
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useApplianceStore } from '@/stores/appliance';
import ApplianceForm from '@components/appliance/ApplianceForm.vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia'

const applianceStore = useApplianceStore();

const { appliances } = storeToRefs(applianceStore);
const showForm = ref<Boolean>(false);
onMounted(async () => {
  if (appliances.value.length === 0) await applianceStore.setAppliances();
});
</script>