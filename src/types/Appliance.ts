import type BaseRecord from './Record'

export interface BaseAppliance {
  name: string
  details: string
  type: ''
  brand: ''
}
export interface ApplianceRecord extends BaseAppliance, BaseRecord {}
