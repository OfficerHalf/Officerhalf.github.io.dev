import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogStreamComponent } from './blog-stream/blog-stream.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { StreamPostComponent } from './blog-stream/stream-post/stream-post.component';

@NgModule({
  declarations: [BlogStreamComponent, BlogPostComponent, StreamPostComponent],
  imports: [CommonModule, BlogRoutingModule]
})
export class BlogModule {}
