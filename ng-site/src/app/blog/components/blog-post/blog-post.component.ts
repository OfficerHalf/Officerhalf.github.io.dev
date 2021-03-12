import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogPost, RetrieveResponseMeta } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit, OnDestroy {
  postData = new BehaviorSubject<BlogPost | undefined>(undefined);
  postBody = new BehaviorSubject<SafeHtml | undefined>(undefined);
  postMeta = new BehaviorSubject<RetrieveResponseMeta | undefined>(undefined);
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
        this.postData.next(post.data);
        this.postBody.next(this.sanitizer.bypassSecurityTrustHtml(post.data.body));
        this.postMeta.next(post.meta);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
