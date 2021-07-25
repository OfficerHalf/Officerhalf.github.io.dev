import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  BlogPost,
  RetrieveResponseMeta
} from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent implements OnDestroy {
  readonly blogPostMeta = new BehaviorSubject<RetrieveResponseMeta | null>(
    null
  );
  readonly blogPost = new BehaviorSubject<BlogPost | null>(null);
  readonly published = new BehaviorSubject<Date | null>(null);
  private readonly destroy = new Subject();
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly blogService: BlogService
  ) {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        const slug = params.get('slug');
        if (slug) {
          const post = this.blogService.getPost(slug);
          if (post) {
            this.blogPostMeta.next(post.meta);
            this.blogPost.next(post.data);
            this.published.next(new Date(post.data.published));
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
