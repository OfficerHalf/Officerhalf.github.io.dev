import { provideRouter, withInMemoryScrolling } from "@angular/router";

import { AppComponent } from "./app/app.component";
import { ROUTES } from "./app/app.routes";
import { bootstrapApplication } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(
        ROUTES,
        withInMemoryScrolling({ anchorScrolling: "enabled" })
      ),
    ],
  }).catch((err) => console.error(err));
}

if (document.readyState === "complete") {
  bootstrap();
} else {
  document.addEventListener("DOMContentLoaded", bootstrap);
}
