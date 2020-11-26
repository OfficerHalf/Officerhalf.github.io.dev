import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopFiveComponent } from './top-five.component';

const routes: Routes = [{ path: '', component: TopFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopFiveRoutingModule {}
