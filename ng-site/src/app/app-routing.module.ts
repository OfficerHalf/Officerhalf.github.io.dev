import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './blog/post-list/post-list.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
