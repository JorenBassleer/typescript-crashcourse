import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getBrands } from '@/api/brand';
import type Brand from "../types/Brand";


export const useBrandStore = defineStore('brand', () => {
  const fetchedBrands = ref<Brand[]>();
  const brands = computed(() => fetchedBrands.value);

  const setBrands = async () => {
    try {
      fetchedBrands.value = await getBrands();
    } catch (error) {
      console.error(error);
    }
  }
  return { setBrands, brands }
})
