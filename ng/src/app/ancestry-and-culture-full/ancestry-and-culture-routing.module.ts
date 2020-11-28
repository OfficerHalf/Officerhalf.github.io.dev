import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AncestryAndCultureComponent } from './ancestry-and-culture.component';

const routes: Routes = [
  {
    path: '',
    component: AncestryAndCultureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AncestryAndCultureRoutingModule {}
