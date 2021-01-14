import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './blog/interfaces/blog-post';
import { BlogService } from './blog/services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-site';

  blogPosts$: Observable<BlogPost[]>;

  constructor(private readonly blog: BlogService) {
    this.blogPosts$ = blog.posts$;
  }
}
