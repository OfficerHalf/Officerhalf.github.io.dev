import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { HrefToRouterLinkDirective } from './components/href-to-router-link.directive';

@NgModule({
  declarations: [BlogPostComponent, BlogComponent, HrefToRouterLinkDirective],
  imports: [CommonModule, BlogRoutingModule],
  exports: [BlogPostComponent]
})
export class BlogModule {}
