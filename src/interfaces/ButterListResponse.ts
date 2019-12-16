import { ButterListMeta } from "./ButterListMeta";

export interface ButterListResponse<T> {
  meta: ButterListMeta;
  data: T;
}
