import { AfterViewInit, Component } from '@angular/core';
import { postList } from '../../../mock/blog';

@Component({
  selector: 'app-blog-stream',
  template: `
    <div>
      <div *ngFor="let post of posts" class="post-wrapper">
        <app-stream-post [title]="post.title" [slug]="post.slug">
          <app-blog-post [postContent]="post.body"></app-blog-post>
        </app-stream-post>
      </div>
    </div>
  `,
  styleUrls: ['./blog-stream.component.scss']
})
export class BlogStreamComponent {
  posts = postList;
}
