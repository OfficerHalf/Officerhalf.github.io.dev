import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
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

  private postList(): Observable<BlogPost[]> {
    return this.api.postList().pipe(
      take(1),
      map((resp): BlogPost[] => resp.data.data)
    );
  }

  getPost(slug: string): Observable<BlogPost> {
    return this.api.getPost(slug).pipe(
      take(1),
      map((resp): BlogPost => resp.data.data)
    );
  }
}
