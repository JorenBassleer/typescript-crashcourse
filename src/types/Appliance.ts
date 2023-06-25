import type BaseRecord from './Record'
import type { BrandRecord } from '@/types/Brand'
import type { TypeOfApplianceRecord } from '@/types/TypeOfAppliance'
import { useTypeOfApplianceStore } from '@/stores/typeOfAppliance'
import { useBrandStore } from '@/stores/brand'

export interface BaseAppliance {
  name: string
  details: string
  type: string
  brand: string
  image?: string
}
export interface ApplianceRecord extends BaseAppliance, BaseRecord {}

export class Appliance implements ApplianceRecord {
  readonly _id: string
  name: string
  details: string
  brand: string
  type: string
  image?: string
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(
    _id: string,
    brand: string,
    type: string,
    name: string,
    details: string,
    createdAt: Date,
    updatedAt: Date,
    image: string
  ) {
    this._id = _id
    this.name = name
    this.details = details
    this.brand = brand
    this.type = type
    this.image = image
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
  // getBrand(): BrandRecord | null {
  //   const brandStore = useBrandStore();
  //   const foundBrand = brandStore.$state.brands.find((brand) => brand._id === this.brand);
  //   return foundBrand ? foundBrand : null;
  // }
  // getType(): TypeOfApplianceRecord | null {
  //   const typeStore = useTypeOfApplianceStore();
  //   const foundType = typeStore.$state.typesOfAppliance.find((typeOfAppliance) => typeOfAppliance._id === this.type);
  //   return foundType ? foundType : null;
  // }
}
