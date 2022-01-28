import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <div class="site-title">
        <a routerLink="/home">
          <h1>Nathan Smith</h1>
        </a>
      </div>
      <div class="nav-links">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
