import type BaseRecord from './Record'

export interface BaseAppliance {
  name: string
  details: string
  type: ''
  brand: ''
  image?: '',
}
export interface ApplianceRecord extends BaseAppliance, BaseRecord {}
