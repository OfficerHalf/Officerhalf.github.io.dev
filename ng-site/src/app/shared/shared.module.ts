import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { ImageCompareSliderComponent } from './components/image-compare-slider/image-compare-slider.component';

@NgModule({
  declarations: [LayoutComponent, NavComponent, ImageModalComponent, ModalComponent, ImageCompareSliderComponent],
  exports: [LayoutComponent, NavComponent, ImageModalComponent, ModalComponent, ImageCompareSliderComponent],
  imports: [CommonModule, OverlayModule, RouterModule]
})
export class SharedModule {}
