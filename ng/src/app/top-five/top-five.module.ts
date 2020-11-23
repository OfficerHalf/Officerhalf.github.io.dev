import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopFiveRoutingModule } from './top-five-routing.module';
import { TopFiveComponent } from './top-five.component';

@NgModule({
  declarations: [TopFiveComponent],
  imports: [CommonModule, TopFiveRoutingModule]
})
export class TopFiveModule {}
