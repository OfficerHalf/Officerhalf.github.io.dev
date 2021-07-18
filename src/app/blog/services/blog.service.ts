import { Injectable } from '@angular/core';

import PostList from '../../../.postlist.json';
import PostMap from '../../../.postmap.json';
import {
  BlogPost,
  PostSummary,
  RetrieveResponse
} from '../interfaces/blog.interface';

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

  getPost(slug: string): RetrieveResponse | undefined {
    const index = this.postMap[slug];
    if (index !== undefined && index >= 0 && index < this.postList.length) {
      const post = this.postList[index];
      return {
        data: post,
        meta: {
          previous_post:
            index < this.postList.length - 1
              ? this.getPostSummary(this.postList[index + 1])
              : null,
          next_post:
            index > 0 ? this.getPostSummary(this.postList[index - 1]) : null
        }
      };
    }
    return undefined;
  }

  private getPostSummary(post: BlogPost): PostSummary {
    return {
      featured_image: post.featured_image,
      slug: post.slug,
      title: post.title
    };
  }
}
