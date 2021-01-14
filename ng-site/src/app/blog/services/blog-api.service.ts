import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import ButterCMS, { ButterStatic } from 'buttercms';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  butter: ButterStatic;
  constructor() {
    this.butter = ButterCMS('9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081');
  }

  postList() {
    return from(this.butter.post.list());
  }

  getPost(slug: string) {
    return from(this.butter.post.retrieve(slug));
  }
}
