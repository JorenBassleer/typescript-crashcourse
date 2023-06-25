import type { BaseAppliance } from '@/types/Appliance'
import type { Appliance } from '@/types/Appliance'
import axios, { type AxiosResponse } from 'axios'

export const getAppliances = async (): Promise<Appliance[]> => {
  const { data } = await axios.get<Appliance[]>(`${import.meta.env.VITE_API_URL}/appliance`)
  return data
}
export const getAppliance = async (id: string): Promise<Appliance> => {
  const { data } = await axios.get<Appliance>(
    `${import.meta.env.VITE_API_URL}/appliance/${id}`
  )
  return data
}
export const createAppliance = async (appliance: BaseAppliance): Promise<Appliance> => {
  const { data } = await axios.post<Appliance>(
    `${import.meta.env.VITE_API_URL}/appliance`,
    appliance
  )
  return data
}
// Idk mss hier toch record
export const updateAppliance = async (
  appliance: BaseAppliance,
  id: string
): Promise<Appliance> => {
  const { data } = await axios.put<Appliance>(
    `${import.meta.env.VITE_API_URL}/appliance/${id}`,
    appliance
  )
  return data
}
export const deleteAppliance = async (id: string): Promise<AxiosResponse> => {
  const result = await axios.delete(`${import.meta.env.VITE_API_URL}/appliance/${id}`)
  return result
}
