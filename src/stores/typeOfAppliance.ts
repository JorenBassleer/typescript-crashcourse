import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getTypes, createType } from '@/api/typeOfAppliance';
import type { TypeOfApplianceRecord, BaseTypeOfAppliance } from "@/types/TypeOfAppliance";


export const useTypeOfApplianceStore = defineStore('typeOfAppliance', () => {
  const typesOfAppliance = ref<TypeOfApplianceRecord[]>([]);

  const setTypeOfAppliance = async () : Promise<void> => {
    try {
      typesOfAppliance.value = await getTypes();
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
  return { setTypeOfAppliance, createTypeOfAppliance, typesOfAppliance }
})
