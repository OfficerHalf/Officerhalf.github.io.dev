import { RedirectorComponent } from "./redirector/redirector.component";
import { Routes } from "@angular/router";
import { environment } from "../environments/environment";

export const ROUTES: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.routes").then((m) => m.HOME_ROUTES),
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

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       anchorScrolling: "enabled",
//       initialNavigation: "enabledBlocking",
//     }),
//   ],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
