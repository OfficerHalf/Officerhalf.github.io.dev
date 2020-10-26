import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnakeComponent } from './snake/snake.component';

const routes: Routes = [
  {
    path: 'snake',
    component: SnakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
