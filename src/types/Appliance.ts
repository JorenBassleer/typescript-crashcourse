import type Brand from "./Brand";
import type TypeOfAppliance from "./TypeOfAppliance";

export default interface Appliance {
  _id: string;
  name: string;
  details: string;
  type: TypeOfAppliance;
  brand: Brand;
}