import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsesComponent } from './components/uses/uses.component';

const routes: Routes = [
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'uses', component: UsesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'battlemaps', loadChildren: () => import('./battlemaps/battlemaps.module').then(m => m.BattlemapsModule) },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
