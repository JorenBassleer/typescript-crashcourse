import type Brand from "./Brand";
import type BaseRecord from "./Record";
import type TypeOfAppliance from "./TypeOfAppliance";

export interface BaseAppliance {
  name: string;
  details: string;
  type: TypeOfAppliance;
  brand: Brand;
}
export interface ApplianceRecord extends BaseAppliance, BaseRecord { };