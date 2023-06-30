import type BaseRecord from './Record'

export interface BaseUser {
  username: string
  email: string
}
export interface UserAuth {
  email: string
  password: string
}
export interface UserRecord extends BaseRecord, BaseUser {}

export class User implements UserRecord {
  readonly _id: string
  username: string
  email: string
  password: string
  readonly createdAt: Date;
  readonly updatedAt: Date

  constructor(
      id: string,
      email: string,
      username: string,
      password: string,
      createdAt: Date,
      updatedAt: Date
    ) {
    this._id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  };
}