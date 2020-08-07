import { BlogPost, KeyValuePair } from './cms';
import { Loot } from './dnd';

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

export interface RandomLootRouteData {
  lootTags: string[];
  loot: Loot[];
}
