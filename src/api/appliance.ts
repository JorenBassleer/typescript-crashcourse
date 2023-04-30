import type Appliance from '@/types/Appliance';
import axios from 'axios';


export const getAppliances = async () : Promise<Appliance[]> => {
  const { data } =  await axios.get<Appliance[]>(`${import.meta.env.VITE_API_URL}/appliance`);
  return data;
}