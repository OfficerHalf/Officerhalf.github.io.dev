import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattlemapsRoutingModule } from './battlemaps-routing.module';
import { BattlemapsComponent } from './battlemaps.component';
import { BattlemapComponent } from './components/battlemap/battlemap.component';


@NgModule({
  declarations: [BattlemapsComponent, BattlemapComponent],
  imports: [
    CommonModule,
    BattlemapsRoutingModule
  ]
})
export class BattlemapsModule { }
