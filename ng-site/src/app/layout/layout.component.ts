import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HalfmoonService } from '../halfmoon/halfmoon.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() navbar = false;
  @Input() sidebar = false;

  sidebarOpen$: Observable<boolean>;
  darkMode$: Observable<boolean>;

  constructor(private readonly halfmoon: HalfmoonService) {
    this.darkMode$ = halfmoon.darkMode;
    this.sidebarOpen$ = halfmoon.sidebar;
  }

  ngOnInit(): void {}

  onToggleSidebarClick(): void {
    this.halfmoon.toggleSidebar();
  }

  onToggleThemeClick(): void {
    this.halfmoon.toggleTheme();
  }
}
