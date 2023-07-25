import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RedirectorComponent } from "./redirector/redirector.component";

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    RedirectorComponent,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
