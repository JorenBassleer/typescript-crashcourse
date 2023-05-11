import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAppliances, deleteAppliance as deleteApplianceAPI, createAppliance as createApplianceAPI } from '@/api/appliance';
import type { ApplianceRecord, BaseAppliance } from "../types/Appliance";
import type { AxiosResponse } from 'axios';


export const useApplianceStore = defineStore('appliance', () => {
  const appliances = ref<ApplianceRecord[]>([]);

  const setAppliances = async (): Promise<void> => {
    try {
      appliances.value = await getAppliances();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAppliance = async (_id: string): Promise<AxiosResponse> => {
    try {
      const response = await deleteApplianceAPI(_id);
      return response;
    } catch (error) {
      return <AxiosResponse>error;
    }
  };
  // Idk if i return this or an actual value
  const createAppliance = async (appliance: BaseAppliance) : Promise<void> => {
    try {
      await createApplianceAPI(appliance);
    } catch (error) {
      console.error(error);
    }
  }
  return { 
    setAppliances,
    deleteAppliance,
    createAppliance,
    appliances
  }
})
