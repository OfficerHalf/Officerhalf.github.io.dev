import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { UsesComponent } from './components/uses/uses.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, AboutComponent, UsesComponent, NavComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
