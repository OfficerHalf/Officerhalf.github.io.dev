import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [BlogPostComponent, BlogComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
  exports: [BlogPostComponent]
})
export class BlogModule {}
