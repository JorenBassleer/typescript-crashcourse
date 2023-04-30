import type Appliance from "./Appliance";
import type User from "./User";

export default interface Incident {
  _id: string;
  user: User;
  appliance: Appliance;
  hasSolved: boolean;
}