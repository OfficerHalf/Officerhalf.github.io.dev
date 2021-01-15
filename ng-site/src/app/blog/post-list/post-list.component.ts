import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../interfaces/blog-post';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]>;

  constructor(private readonly blogService: BlogService, private readonly router: Router) {
    this.blogPosts$ = blogService.posts$;
  }

  ngOnInit(): void {}

  onCardClick(slug: string): void {
    this.router.navigateByUrl(`/blog/post/${slug}`);
  }
}
