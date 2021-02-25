import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RetrieveResponse } from '../../interfaces/blog.interface';
import { BlogApiService } from '../../services/blog-api.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  postData$: Observable<RetrieveResponse> = new Observable();

  constructor(private route: ActivatedRoute, private readonly blogService: BlogApiService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') as string;
    this.postData$ = this.blogService.getBlogPost(slug);
    this.postData$.subscribe(resp => {
      console.log(resp);
    });
  }
}
