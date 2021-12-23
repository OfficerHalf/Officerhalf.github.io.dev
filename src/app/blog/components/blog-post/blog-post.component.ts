import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  template: ` <div [innerHTML]="postContent"></div> `,
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() postContent: string = '';
}
