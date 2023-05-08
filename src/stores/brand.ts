import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getBrands } from '@/api/brand';
import type { BrandRecord } from "../types/Brand";


export const useBrandStore = defineStore('brand', () => {
  const fetchedBrands = ref<BrandRecord[]>();
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
