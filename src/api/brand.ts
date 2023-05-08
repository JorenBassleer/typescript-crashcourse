import type { BrandRecord } from '@/types/Brand';
import axios from 'axios';


export const getBrands = async () : Promise<BrandRecord[]> => {
  const { data } =  await axios.get<BrandRecord[]>(`${import.meta.env.VITE_API_URL}/brand`);
  return data;
}