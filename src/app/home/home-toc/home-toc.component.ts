import { Component } from "@angular/core";

@Component({
  selector: "app-home-toc",
  template: `<aside>
    <nav>
      <details open="">
        <summary>About</summary>
        <ul>
          <li><a routerLink fragment="bio">Bio</a></li>
          <li><a routerLink fragment="contact">Contact</a></li>
        </ul>
      </details>
      <details open="">
        <summary>Projects</summary>
        <ul>
          <li><a routerLink fragment="foundry">Foundry VTT</a></li>
          <li><a routerLink fragment="crypt-ui">Crypt UI</a></li>
          <li><a routerLink fragment="alloy">Alloy</a></li>
          <li><a routerLink fragment="obsidian">Obsidian</a></li>
          <li><a routerLink fragment="homebrewery">Homebrewery</a></li>
        </ul>
      </details>
    </nav>
  </aside>`,
  styleUrls: ["./home-toc.component.scss"],
})
export class HomeTocComponent {}
