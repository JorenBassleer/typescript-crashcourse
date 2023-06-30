import type BaseRecord from './Record'
import { useBrandStore } from '@/stores/brand'

export interface BaseBrand {
  name: string
}
export interface BrandRecord extends BaseBrand, BaseRecord {}

export class Brand implements BrandRecord {
  readonly _id: string
  name: string
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(_id: string, createdAt: Date, updatedAt: Date, name: string) {
    this._id = _id
    this.name = name
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
