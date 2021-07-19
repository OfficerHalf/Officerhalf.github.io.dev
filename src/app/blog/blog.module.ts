import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogPostComponent, BlogComponent],
  imports: [CommonModule, BlogRoutingModule],
  exports: [BlogPostComponent]
})
export class BlogModule {}
