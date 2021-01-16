import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogPost } from '../interfaces/blog-post';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]>;
  featuredPost$: Observable<BlogPost | null>;

  constructor(blogService: BlogService, private readonly router: Router) {
    this.blogPosts$ = blogService.posts$.pipe(map(posts => (posts.length > 1 && posts.slice(1)) || []));
    this.featuredPost$ = blogService.posts$.pipe(map(posts => (posts.length > 0 && posts[0]) || null));
  }

  ngOnInit(): void {}

  onCardClick(slug: string): void {
    this.router.navigateByUrl(`/blog/post/${slug}`);
  }
}
