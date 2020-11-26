import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'snake',
    loadChildren: () => import('./snake/snake.module').then(m => m.SnakeModule)
  },
  {
    path: 'ancestry-and-culture',
    loadChildren: () =>
      import('./ancestry-and-culture/ancestry-and-culture.module').then(m => m.AncestryAndCultureModule)
  },
  {
    path: 'top-five',
    loadChildren: () => import('./top-five/top-five.module').then(m => m.TopFiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
