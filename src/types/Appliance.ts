import type BaseRecord from './Record'

export interface BaseAppliance {
  name: string
  details: string
  type: string
  brand: string
  image?: string
}
export interface ApplianceRecord extends BaseAppliance, BaseRecord {}
