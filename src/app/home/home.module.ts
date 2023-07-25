import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeTocComponent } from "./home-toc/home-toc.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { BrandBadgeComponent } from "./brand-badge/brand-badge.component";
import { BrandBadgeListComponent } from "./brand-badge/brand-badge-list.component";

@NgModule({
    imports: [CommonModule, HomeRoutingModule, HomeComponent,
        HomeTocComponent,
        AboutComponent,
        ProjectsComponent,
        BrandBadgeComponent,
        BrandBadgeListComponent],
})
export class HomeModule {}
