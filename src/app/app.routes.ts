import { HomeComponent } from './home/home.component';
import { RedirectorComponent } from './redirector/redirector.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
