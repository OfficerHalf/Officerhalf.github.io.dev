import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { environment } from "../environments/environment";
import { RedirectorComponent } from "./redirector/redirector.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "foundry",
    component: RedirectorComponent,
    data: {
      redirect: environment.redirectUrls.foundry,
    },
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
