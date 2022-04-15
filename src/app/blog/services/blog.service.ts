import { Injectable } from '@angular/core';

// import PostList from '../../../.postlist.json';
// import PostMap from '../../../.postmap.json';
import { BlogPost, PostSummary, RetrieveResponse } from '../interfaces/blog.interface';
import { BlogAdapterService } from './blog-adapter.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // private readonly postList: BlogPost[] = PostList;
  // private readonly postMap: Record<string, number> = PostMap;
  private readonly postList: BlogPost[];
  private readonly postMap: Record<string, number>;
  constructor(private readonly adapterService: BlogAdapterService) {
    this.postList = adapterService.getPostList();
    this.postMap = adapterService.getPostMap();
  }

  getPostList(): BlogPost[] {
    return this.postList;
  }

  getPost(slug: string): RetrieveResponse | undefined {
    const index = this.postMap[slug];
    return this.getPostByIndex(index);
  }

  getPostByPath(path: string): RetrieveResponse | undefined {
    const index = this.postList.findIndex((post) => path === post.path);
    return this.getPostByIndex(index);
  }

  private getPostByIndex(index: number): RetrieveResponse | undefined {
    if (index !== undefined && index >= 0 && index < this.postList.length) {
      const post = this.postList[index];
      return {
        data: post,
        meta: {
          previous_post: index < this.postList.length - 1 ? this.getPostSummary(this.postList[index + 1]) : null,
          next_post: index > 0 ? this.getPostSummary(this.postList[index - 1]) : null
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
