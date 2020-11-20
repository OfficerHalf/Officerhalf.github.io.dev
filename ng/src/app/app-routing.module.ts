import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AncestryAndCultureComponent } from './ancestry-and-culture/ancestry-and-culture.component';
import { SnakeComponent } from './snake/snake.component';

const routes: Routes = [
  {
    path: 'snake',
    component: SnakeComponent
  },
  {
    path: 'ancestry-and-culture',
    component: AncestryAndCultureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
