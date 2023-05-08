import type { BrandRecord, BaseBrand } from '@/types/Brand';
import axios, { type AxiosResponse } from 'axios';


export const getBrands = async () : Promise<BrandRecord[]> => {
  const { data } =  await axios.get<BrandRecord[]>(`${import.meta.env.VITE_API_URL}/brand`);
  return data;
};
export const getBrand = async (id: string): Promise<BrandRecord> => {
  const { data } = await axios.get<BrandRecord>(`${import.meta.env.VITE_API_}/brand/${id}`);
  return data;
};
export const createBrand = async (brand: BaseBrand): Promise<BrandRecord> => {
  const { data } = await axios.post<BrandRecord>(`${import.meta.env.VITE_API_URL}/brand`, brand);
  return data;
};
export const updateBrand = async (brand: BaseBrand): Promise<BrandRecord> => {
  const { data } = await axios.post<BrandRecord>(`${import.meta.env.VITE_API_URL}/brand`, brand);
  return data;
};
export const deleteBrand = async (id: string): Promise<AxiosResponse> => {
  const result = await axios.delete(`${import.meta.env.VITE_API_URL}/brand/${id}`);
  return result;
};