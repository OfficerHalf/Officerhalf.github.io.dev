import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';
import { BlogPost } from '../interfaces/blog-post';
import { BlogApiService } from './blog-api.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  posts$: Observable<BlogPost[]>;

  constructor(private readonly api: BlogApiService) {
    this.posts$ = this.postList();
  }

  getPost(slug: string): Observable<BlogPost> {
    // Look in cached posts first
    return this.posts$.pipe(
      map(posts => posts.find(post => post.slug === slug)),
      concatMap(post => {
        if (post) {
          return of(post);
        } else {
          // Otherwise, make api call
          return this.getPostFromApi(slug);
        }
      })
    );
  }

  private getPostFromApi(slug: string): Observable<BlogPost> {
    return this.api.getPost(slug).pipe(
      take(1),
      map((resp): BlogPost => resp.data.data)
    );
  }

  private postList(): Observable<BlogPost[]> {
    return this.api.postList().pipe(
      take(1),
      map((resp): BlogPost[] => resp.data.data)
    );
  }
}
