import type BaseRecord from './Record';

export interface BaseAppliance {
  name: string;
  details: string;
  type: string;
  brand: string;
  image?: string;
}
export interface ApplianceRecord extends BaseAppliance, BaseRecord {}

export class Appliance implements ApplianceRecord {
  readonly _id: string;
  name: string;
  details: string;
  brand: string;
  type: string;
  image?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

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
    this._id = _id;
    this.name = name;
    this.details = details;
    this.brand = brand;
    this.type = type;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
