import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, NavComponent],
  exports: [LayoutComponent, NavComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
