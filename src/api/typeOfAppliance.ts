import type { TypeOfApplianceRecord, BaseTypeOfAppliance } from '@/types/TypeOfAppliance'; 
import axios, { type AxiosResponse } from 'axios';


export const getTypes = async () : Promise<TypeOfApplianceRecord[]> => {
  const { data } =  await axios.get<TypeOfApplianceRecord[]>(`${import.meta.env.VITE_API_URL}/type`);
  return data;
};
export const getType = async (id: string): Promise<TypeOfApplianceRecord> => {
  const { data } = await axios.get<TypeOfApplianceRecord>(`${import.meta.env.VITE_API_}/type/${id}`);
  return data;
};
export const createType = async (type: BaseTypeOfAppliance): Promise<TypeOfApplianceRecord> => {
  const { data } = await axios.post<TypeOfApplianceRecord>(`${import.meta.env.VITE_API_URL}/type`, type);
  return data;
};
export const updateType = async (type: BaseTypeOfAppliance): Promise<TypeOfApplianceRecord> => {
  const { data } = await axios.post<TypeOfApplianceRecord>(`${import.meta.env.VITE_API_URL}/type`, type);
  return data;
};
export const deleteType = async (id: string): Promise<AxiosResponse> => {
  const result = await axios.delete(`${import.meta.env.VITE_API_URL}/type/${id}`);
  return result;
};