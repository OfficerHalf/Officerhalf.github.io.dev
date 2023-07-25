import { Component, OnInit } from "@angular/core";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from "./about/about.component";
import { HomeTocComponent } from "./home-toc/home-toc.component";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    standalone: true,
    imports: [
        HomeTocComponent,
        AboutComponent,
        ProjectsComponent,
    ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
