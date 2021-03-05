import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattlemapsComponent } from './battlemaps.component';
import { BattlemapComponent } from './components/battlemap/battlemap.component';

const routes: Routes = [
  { path: 'map/:slug', component: BattlemapComponent },
  { path: '', component: BattlemapsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattlemapsRoutingModule {}
