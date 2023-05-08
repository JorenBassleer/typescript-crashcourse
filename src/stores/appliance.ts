import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAppliances, deleteAppliance as deleteApplianceAPI } from '@/api/appliance';
import type { ApplianceRecord } from "../types/Appliance";
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
  return { setAppliances, deleteAppliance, appliances }
})
