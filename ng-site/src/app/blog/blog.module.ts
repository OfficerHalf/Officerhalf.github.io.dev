import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogComponent, BlogPostComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule]
})
export class BlogModule {}
