import { ButterRetrieveMeta } from "./ButterRetrieveMeta";
import { BlogPost } from "./BlogPost";

export interface ButterRetrieveResponse {
  meta: ButterRetrieveMeta;
  data: BlogPost;
}
