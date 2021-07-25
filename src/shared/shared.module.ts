import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [NavBarComponent, SidenavComponent],
  exports: [NavBarComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule
  ]
})
export class SharedModule {}
