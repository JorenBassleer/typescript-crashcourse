import type BaseRecord from './Record';

export interface BaseTypeOfAppliance {
  name: string;
}
export interface TypeOfApplianceRecord extends BaseTypeOfAppliance, BaseRecord {}