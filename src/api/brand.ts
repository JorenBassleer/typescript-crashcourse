import type Brand from '@/types/Brand';
import axios from 'axios';


export const getBrands = async () : Promise<Brand[]> => {
  const { data } =  await axios.get<Brand[]>(`${import.meta.env.VITE_API_URL}/brand`);
  return data;
}