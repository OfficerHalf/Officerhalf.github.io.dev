import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogPost } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = new BehaviorSubject<BlogPost[]>([]);
  constructor(private readonly blogService: BlogService) {}

  ngOnInit(): void {
    this.posts.next(this.blogService.getPostList());
  }
}
