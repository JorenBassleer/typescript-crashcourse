
export default interface Reservation {
  _id: string;
  name: string;
  details?: string;
  start: Date;
  end: Date;
  user: '';
  appliances: string[];
  amounts: number[];
  createdAt: Date;
  updatedAt: Date;
}