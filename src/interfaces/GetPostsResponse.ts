import { BlogPost } from "./BlogPost";

export interface GetPostsResponse {
  data: BlogPost[];
  meta: {
    count: number;
    previous_page: string | null;
    next_page: string | null;
  };
}
