import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: 'post/:slug',
    component: BlogPostComponent
  },
  { path: '', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
