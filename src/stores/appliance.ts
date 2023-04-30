import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAppliances } from '@/api/appliance';
import type Appliance from "../types/Appliance";


export const useApplianceStore = defineStore('appliance', () => {
  const fetchedAppliances = ref<Appliance[]>();
  const appliances = computed(() => fetchedAppliances.value);

  const setAppliances = async () => {
    try {
      fetchedAppliances.value = await getAppliances();
      console.log('fetchAppliances', fetchedAppliances.value);
    } catch (error) {
      console.error(error);
    }
  }
  return { setAppliances, appliances }
})
