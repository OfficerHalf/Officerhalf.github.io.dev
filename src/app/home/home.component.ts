import { Component, OnInit } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeTocComponent } from './home-toc/home-toc.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [HomeTocComponent, AboutComponent, ProjectsComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
