import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blog.interface';

import PostList from '../../../.postlist.json';
import PostMap from '../../../.postmap.json';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly postList: BlogPost[] = PostList;
  private readonly postMap: Record<string, number> = PostMap;
  constructor() {}

  getPostList(): BlogPost[] {
    return this.postList;
  }

  getPost(slug: string): BlogPost | undefined {
    const index = this.postMap[slug];
    if (index !== undefined && index >= 0 && index < this.postList.length) {
      return this.postList[index];
    }
    return undefined;
  }
}
