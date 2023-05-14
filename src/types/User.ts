import type BaseRecord from './Record'; 

export interface BaseUser {
  username: string;
  email: string;
}
export interface UserRecord extends BaseRecord, BaseUser { }