import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [LayoutComponent, NavComponent, ImageModalComponent, ModalComponent],
  exports: [LayoutComponent, NavComponent, ImageModalComponent, ModalComponent],
  imports: [CommonModule, OverlayModule, RouterModule]
})
export class SharedModule {}
