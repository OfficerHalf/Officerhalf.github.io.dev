import { Injectable } from '@angular/core';
import Butter from 'buttercms';
import { environment as env } from '../../../environments/environment';
import { ApiResponse, ListResponse, RetrieveResponse } from '../interfaces/blog.interface';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  private readonly butter = Butter(env.butter);
  constructor() {}

  getBlogPosts(): Observable<ListResponse> {
    return from(this.butter.post.list({ excludeBody: true }) as Promise<ApiResponse<ListResponse>>).pipe(
      map(resp => resp.data)
    );
  }

  getBlogPost(slug: string): Observable<RetrieveResponse> {
    console.log('getting post with slug: ' + slug);
    return from(this.butter.post.retrieve(slug) as Promise<ApiResponse<RetrieveResponse>>).pipe(map(resp => resp.data));
  }
}
