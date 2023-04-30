import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type Appliance from "../types/Appliance";
import axios from 'axios';


export const useApplianceStore = defineStore('appliance', () => {
  const fetchedAppliances = ref<Appliance[]>();
  const appliances = computed(() => fetchedAppliances.value);

  const fetchAppliances = async () => {
    try {
      const temp = await axios.get(`${import.meta.env.VITE_API_URL}/appliance`);
      fetchedAppliances.value = temp.data;
    } catch (error) {
    console.error(error);
    }
  }
  return { fetchAppliances, appliances }
})
