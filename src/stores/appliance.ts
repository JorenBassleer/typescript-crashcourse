import { Ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAppliances, deleteAppliance as deleteApplianceAPI } from '@/api/appliance';
import type Appliance from "../types/Appliance";
import type { AxiosResponse } from 'axios';


export const useApplianceStore = defineStore('appliance', () => {
  const appliances = Ref<Appliance[]>;

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
