import { BlogPost, KeyValuePair } from './cms';

export interface BlogRouteData {
  posts: BlogPost[];
}

export interface CategoryRouteData {
  posts: BlogPost[];
  category: KeyValuePair;
}

export interface TagRouteData {
  posts: BlogPost[];
  tag: KeyValuePair;
}

export interface PostRouteData {
  post: BlogPost;
  next?: KeyValuePair;
  previous?: KeyValuePair;
}
