import type BaseRecord from './Record';

export interface Incident {
  user: string;
  appliance: string;
  hasSolved: boolean;
}
export interface IncidentRecord extends BaseRecord {}
