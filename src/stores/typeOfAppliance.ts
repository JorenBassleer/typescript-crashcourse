import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getTypes } from '@/api/typeOfAppliance';
import type { TypeOfApplianceRecord } from "@/types/TypeOfAppliance";


export const useTypeOfApplianceStore = defineStore('typeOfAppliance', () => {
  const fetchedTypes = ref<TypeOfApplianceRecord[]>();
  const types = computed(() => fetchedTypes.value);

  const setTypeOfAppliance = async () => {
    try {
      fetchedTypes.value = await getTypes();
    } catch (error) {
      console.error(error);
    }
  }
  return { setTypeOfAppliance, types }
})
