import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { PostListComponent } from './components/post-list/post-list.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: BlogComponent,
//     redirectTo: 'list',
//     children: [
//       { path: 'list', component: PostListComponent },
//       { path: 'post/:slug', component: BlogPostComponent }
//     ]
//   }
// ];
const routes: Routes = [
  { path: 'list', component: PostListComponent },
  { path: 'post/:slug', component: BlogPostComponent },
  {
    path: '',
    component: BlogComponent,
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
