import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getBrands, createBrand as createBrandAPI } from '@/api/brand';
import type { BrandRecord, BaseBrand } from "../types/Brand";


export const useBrandStore = defineStore('brand', () => {
  const brands = ref<BrandRecord[]>([]);

  const setBrands = async () : Promise<void> => {
    try {
      brands.value = await getBrands();
    } catch (error) {
      console.error(error);
    }
  };
  const createBrand = async (brand: BaseBrand) : Promise<void> => {
    try {
      await createBrandAPI(brand);
    } catch (error) {
      console.error(error);
    };
  }
  return { setBrands, createBrand, brands }
})
