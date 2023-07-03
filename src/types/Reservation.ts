import type BaseRecord from './Record';

export interface BaseReservation {
  name: string;
  details?: string;
  start: Date | null;
  end: Date | null;
  user: string;
  appliances: string[];
  amounts: number[];
}

export interface ReservationRecord extends BaseRecord, BaseReservation { }

export class Reservation implements ReservationRecord {
  readonly _id: string;
  name: string;  
  details?: string;
  start: Date | null;
  end: Date | null;
  user: string;
  appliances: string[];
  amounts: number[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  constructor(
    _id: string,
    start: Date,
    end: Date,
    name: string,
    details: string,
    appliances: string[],
    amounts: number[],
    user: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this._id = _id;
    this.user = user;
    this.name = name;
    this.details = details;
    this.appliances = appliances;
    this.start = start;
    this.end = end;
    this.amounts = amounts;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
};