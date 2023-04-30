import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type Appliance from "../types/Appliance";
import axios from 'axios';

export const useApplianceStore = defineStore('appliance', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const fetchedAppliances = ref<Appliance[]>();
  const appliances = computed(() => fetchedAppliances.value);

  const fetchAppliances = async () => {
    // Change to env url later
    fetchedAppliances.value = await axios.get('/appliances');
  }
  return { count, doubleCount, fetchAppliances, appliances }
})
