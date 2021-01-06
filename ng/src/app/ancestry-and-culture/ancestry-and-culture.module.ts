import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';

import { AncestryAndCultureRoutingModule } from './ancestry-and-culture-routing.module';
import { AncestryAndCultureComponent } from './ancestry-and-culture.component';

@NgModule({
  declarations: [AncestryAndCultureComponent],
  imports: [
    CommonModule,
    AncestryAndCultureRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    FormsModule,
    MatSliderModule
  ]
})
export class AncestryAndCultureModule {}
