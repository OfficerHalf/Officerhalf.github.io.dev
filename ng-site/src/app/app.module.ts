import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsesComponent } from './components/uses/uses.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomepageComponent, UsesComponent, ContactComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
