import type { UserAuth, UserRecord } from '@/types/User'
import axios from 'axios'

export const login = async (user: UserAuth): Promise<UserRecord> => {
  const { data } = await axios.post<UserRecord>(`${import.meta.env.VITE_API_URL}/auth/login`, user)
  return data
}
