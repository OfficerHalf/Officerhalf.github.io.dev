import { BlogPost } from './cms';

export interface BlogRouteData {
  posts: BlogPost[];
}

export interface PostRouteData {
  post: BlogPost;
}
