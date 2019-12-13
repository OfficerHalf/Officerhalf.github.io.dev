import { ButterListMeta } from "./ButterListMeta";
import { BlogPost } from "./BlogPost";

export interface ButterListResponse {
  meta: ButterListMeta;
  data: BlogPost[];
}
