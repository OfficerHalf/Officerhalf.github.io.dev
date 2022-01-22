import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  blogPosts = this.blogService.getPostList();

  constructor(private readonly blogService: BlogService) {}
}
