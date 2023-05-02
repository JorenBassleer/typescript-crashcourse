import type Appliance from '@/types/Appliance';
import axios, { type AxiosResponse } from 'axios';


export const getAppliances = async () : Promise<Appliance[]> => {
  const { data } =  await axios.get<Appliance[]>(`${import.meta.env.VITE_API_URL}/appliance`);
  console.log('data:', data);
  return data;
};
export const getAppliance = async (_id: string): Promise<Appliance> => {
  const { data } = await axios.get<Appliance>(`${import.meta.env.VITE_API_URL}/appliance/${_id}`);
  return data;
};
export const createAppliance = async (appliance: Appliance): Promise<Appliance> => {
  const { data } = await axios.post<Appliance>(`${import.meta.env.VITE_API_URL}/appliance`, appliance);
  return data;
};
export const updateAppliance = async (appliance: Appliance, _id: string): Promise<Appliance> => {
  const { data } = await axios.put<Appliance>(`${import.meta.env.VITE_API_URL}/appliance/${_id}`, appliance);
  return data;
};
export const deleteAppliance = async (_id: string): Promise<AxiosResponse> => {
  const result = await axios.delete(`${import.meta.env.VITE_API_URL}/appliance/${_id}`);
  return result;
};