import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getBrands, createBrand as createBrandAPI } from '@/api/brand';
import type { Brand, BaseBrand } from '../types/Brand';

export const useBrandStore = defineStore('brand', () => {
  const brands = ref<Brand[]>([]);

  const setBrands = async (): Promise<void> => {
    try {
      brands.value = await getBrands();
    } catch (error) {
      console.error(error);
    }
  };
  const createBrand = async (brand: BaseBrand): Promise<void> => {
    try {
      await createBrandAPI(brand);
    } catch (error) {
      console.error(error);
    }
  };
  const searchBrandOnId = (brandId: String): Brand | null => {
    const foundBrand = brands.value.find((brand) => brand._id === brandId);
    return foundBrand ? foundBrand : null;
  };
  return {
    setBrands,
    createBrand,
    brands,
    searchBrandOnId
  };
});
