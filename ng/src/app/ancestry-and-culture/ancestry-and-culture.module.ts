import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AncestryAndCultureComponent } from './ancestry-and-culture.component';
import { AncestryAndCultureService } from './ancestry-and-culture.service';
import { AncestryComponent } from './ancestry/ancestry.component';
import { CultureComponent } from './culture/culture.component';
import { AttributeComponent } from './attribute/attribute.component';

@NgModule({
  declarations: [AncestryAndCultureComponent, AncestryComponent, CultureComponent, AttributeComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AncestryAndCultureService]
})
export class AncestryAndCultureModule {}
