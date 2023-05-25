import type BaseRecord from './Record'

export interface BaseReservation {
  name: string
  details?: string
  start: Date
  end: Date
  user: ''
  appliances: string[]
  amounts: number[]
  createdAt: Date
  updatedAt: Date
}

export interface ReservationRecord extends BaseRecord, BaseReservation {}
