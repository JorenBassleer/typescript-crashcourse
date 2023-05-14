import type BaseRecord from './Record';

export interface BaseBrand {
  name: string;
}
export interface BrandRecord extends BaseBrand, BaseRecord {}