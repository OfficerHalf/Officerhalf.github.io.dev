import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [BlogComponent, BlogPostComponent, PostListComponent],
  imports: [CommonModule, BlogRoutingModule]
})
export class BlogModule {}
