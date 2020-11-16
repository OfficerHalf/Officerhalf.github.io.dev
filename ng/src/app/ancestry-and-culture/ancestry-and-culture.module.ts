import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AncestryAndCultureComponent } from './ancestry-and-culture.component';
import { AncestryAndCultureService } from './ancestry-and-culture.service';

@NgModule({
  declarations: [AncestryAndCultureComponent],
  imports: [CommonModule],
  providers: [AncestryAndCultureService]
})
export class AncestryAndCultureModule {}
