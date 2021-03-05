import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlloyComponent } from './components/alloy/alloy.component';
import { HomebreweryComponent } from './components/homebrewery/homebrewery.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: 'alloy', component: AlloyComponent },
  { path: 'homebrewery', component: HomebreweryComponent },
  { path: '', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
