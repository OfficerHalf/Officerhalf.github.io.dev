import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { AlloyComponent } from './components/alloy/alloy.component';
import { HomebreweryComponent } from './components/homebrewery/homebrewery.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectsComponent, AlloyComponent, HomebreweryComponent],
  imports: [CommonModule, SharedModule, ProjectsRoutingModule]
})
export class ProjectsModule {}
