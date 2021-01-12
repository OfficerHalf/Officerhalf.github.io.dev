import { Component, OnInit } from '@angular/core';
import halfmoon from 'src/util/halfmoon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    halfmoon.toggleSidebar();
  }
}
