import { ChangeDetectionStrategy, Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CodeHighlightService } from '../../../../shared/services/code-highlight.service';
import { BlogPost, RetrieveResponse, RetrieveResponseMeta } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent implements OnDestroy, AfterViewInit {
  readonly postData = new ReplaySubject<RetrieveResponse>(1);
  readonly blogPostMeta = this.postData.pipe(map((d) => d.meta));
  readonly blogPost = this.postData.pipe(map((d) => d.data));
  readonly published = this.postData.pipe(map((d) => new Date(d.data.published)));
  private readonly destroy = new Subject<void>();
  @ViewChild('postBody') postBodyElement!: ElementRef<HTMLDivElement>;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly blogService: BlogService,
    private readonly codeHighlightService: CodeHighlightService
  ) {
    this.activatedRoute.paramMap.pipe(takeUntil(this.destroy)).subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const post = this.blogService.getPost(slug);
        if (post) {
          this.postData.next(post);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.blogPost.pipe(takeUntil(this.destroy)).subscribe(() => {
      if (this.postBodyElement) {
        this.codeHighlightService.highlightAllUnder(this.postBodyElement.nativeElement);
      }
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
