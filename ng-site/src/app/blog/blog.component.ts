import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogPost } from './interfaces/blog.interface';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts = new BehaviorSubject<BlogPost[]>([]);
  constructor(private readonly blogService: BlogService) {}

  ngOnInit(): void {
    this.posts.next(this.blogService.getPostList());
  }
}
