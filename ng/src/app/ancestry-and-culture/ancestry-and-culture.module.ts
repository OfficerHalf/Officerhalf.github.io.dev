import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AncestryAndCultureRoutingModule } from './ancestry-and-culture-routing.module';
import { AncestryAndCultureComponent } from './ancestry-and-culture.component';

@NgModule({
  declarations: [AncestryAndCultureComponent],
  imports: [CommonModule, AncestryAndCultureRoutingModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule]
})
export class AncestryAndCultureModule {}
