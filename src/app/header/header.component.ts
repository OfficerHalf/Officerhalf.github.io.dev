import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="site-title">
        <a routerLink="/home">
          <h1>Nathan&nbsp;Smith</h1>
        </a>
      </div>
      <nav class="nav-links">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
