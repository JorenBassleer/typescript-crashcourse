import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getTypes, createType } from '@/api/typeOfAppliance';
import type { TypeOfApplianceRecord, BaseTypeOfAppliance } from "@/types/TypeOfAppliance";


export const useTypeOfApplianceStore = defineStore('typeOfAppliance', () => {
  const fetchedTypes = ref<TypeOfApplianceRecord[]>();
  const types = computed(() => fetchedTypes.value);

  const setTypeOfAppliance = async () : Promise<void> => {
    try {
      fetchedTypes.value = await getTypes();
    } catch (error) {
      console.error(error);
    }
  }
  const createTypeOfAppliance = async (type: BaseTypeOfAppliance) : Promise<void> => {
    try {
      await createType(type);
    } catch (error) {
      console.error(error);
    }
  };
  return { setTypeOfAppliance, createTypeOfAppliance, types }
})
