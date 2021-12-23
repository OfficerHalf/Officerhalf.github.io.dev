import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-post',
  template: `
    <div class="stream-post">
      <div class="left-column">
        <h1 class="title" [id]="slug">{{ title }}</h1>
      </div>
      <div class="right-column"><ng-content></ng-content></div>
    </div>
  `,
  styleUrls: ['./stream-post.component.scss']
})
export class StreamPostComponent {
  @Input() title: string = '';
  @Input() slug: string = '';
}
