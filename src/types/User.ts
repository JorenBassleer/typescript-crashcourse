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
