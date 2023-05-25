import type { ApplianceRecord, BaseAppliance } from '@/types/Appliance'
import axios, { type AxiosResponse } from 'axios'

export const getAppliances = async (): Promise<ApplianceRecord[]> => {
  const { data } = await axios.get<ApplianceRecord[]>(`${import.meta.env.VITE_API_URL}/appliance`)
  return data
}
export const getAppliance = async (id: string): Promise<ApplianceRecord> => {
  const { data } = await axios.get<ApplianceRecord>(
    `${import.meta.env.VITE_API_URL}/appliance/${id}`
  )
  return data
}
export const createAppliance = async (appliance: BaseAppliance): Promise<ApplianceRecord> => {
  const { data } = await axios.post<ApplianceRecord>(
    `${import.meta.env.VITE_API_URL}/appliance`,
    appliance
  )
  return data
}
// Idk mss hier toch record
export const updateAppliance = async (
  appliance: BaseAppliance,
  id: string
): Promise<BaseAppliance> => {
  const { data } = await axios.put<BaseAppliance>(
    `${import.meta.env.VITE_API_URL}/appliance/${id}`,
    appliance
  )
  return data
}
export const deleteAppliance = async (id: string): Promise<AxiosResponse> => {
  const result = await axios.delete(`${import.meta.env.VITE_API_URL}/appliance/${id}`)
  return result
}
