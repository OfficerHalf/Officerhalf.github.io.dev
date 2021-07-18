import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  blogPosts = this.blogService.getPostList();
  constructor(private readonly blogService: BlogService) {}
}
