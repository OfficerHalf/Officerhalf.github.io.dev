import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { BlogPost } from '../../interfaces/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  postData = new BehaviorSubject<BlogPost | undefined>(undefined);

  constructor(private route: ActivatedRoute, private readonly blogService: BlogService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') as string;
    this.postData.next(this.blogService.getPost(slug));
  }
}
