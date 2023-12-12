import { HomeComponent } from "./home.component";
import { Routes } from "@angular/router";

export const HOME_ROUTES: Routes = [{ path: "", component: HomeComponent }];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class HomeRoutingModule { }
