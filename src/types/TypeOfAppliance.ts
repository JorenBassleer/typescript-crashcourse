import type BaseRecord from './Record'
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance'

export interface BaseTypeOfAppliance {
  name: string
}
export interface TypeOfApplianceRecord extends BaseTypeOfAppliance, BaseRecord {}

export class TypeOfAppliance implements TypeOfApplianceRecord {
  readonly _id: string
  name: string
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(_id: string, name: string, createdAt: Date, updatedAt: Date) {
    this._id = _id
    this.name = name
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
