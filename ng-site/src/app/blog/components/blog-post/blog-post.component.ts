import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogPostExtendedData } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit, OnDestroy {
  blogPost = new BehaviorSubject<BlogPostExtendedData>((undefined as unknown) as BlogPostExtendedData);
  private readonly destroy = new Subject();

  constructor(
    private route: ActivatedRoute,
    private readonly blogService: BlogService,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy)).subscribe(paramMap => {
      const slug = paramMap.get('slug') as string;
      const post = this.blogService.getPost(slug);
      if (post) {
        this.blogPost.next({
          data: post.data,
          body: this.sanitizer.bypassSecurityTrustHtml(post.data.body),
          meta: post.meta,
          dates: {
            created: new Date(post.data.created),
            published: new Date(post.data.published),
            updated: new Date(post.data.updated)
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
