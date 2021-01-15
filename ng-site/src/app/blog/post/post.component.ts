import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { PrismService } from 'src/app/util/prism.service';
import { BlogPost } from '../interfaces/blog-post';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewChecked {
  post$: Observable<BlogPost> = new Observable();
  highlight = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly blogService: BlogService,
    private readonly prismService: PrismService,
    private readonly viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(
      map((params): string => {
        return params.slug;
      }),
      concatMap(slug => {
        return this.blogService.getPost(slug);
      }),
      tap(() => {
        this.highlight = true;
      })
    );
  }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    if (this.highlight) {
      this.prismService.highlightAll();
      this.highlight = false;
    }
  }
}
