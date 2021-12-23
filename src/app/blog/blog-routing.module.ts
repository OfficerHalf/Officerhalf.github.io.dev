import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogStreamComponent } from './blog-stream/blog-stream.component';

const routes: Routes = [{ path: '', component: BlogStreamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
