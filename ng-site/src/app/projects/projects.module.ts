import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { AlloyComponent } from './components/alloy/alloy.component';
import { HomebreweryComponent } from './components/homebrewery/homebrewery.component';


@NgModule({
  declarations: [ProjectsComponent, AlloyComponent, HomebreweryComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
