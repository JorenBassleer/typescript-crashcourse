import type Appliance from "./Appliance";
import type User from "./User";

export default interface Reservation {
  _id: string;
  name: string;
  details?: string;
  start: Date;
  end: Date;
  user: User;
  appliances: Appliance[];
  amounts: number[];
  createdAt: Date;
  updatedAt: Date;
}