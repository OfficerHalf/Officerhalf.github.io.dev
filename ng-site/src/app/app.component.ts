import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import halfmoon from 'src/util/halfmoon';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-site';
  darkMode$: Observable<boolean>;

  constructor(private readonly router: Router, private route: ActivatedRoute, private readonly theme: ThemeService) {
    // Call halfmoon.onDOMContentLoaded any time the route changes
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      halfmoon.onDOMContentLoaded();
    });
    this.darkMode$ = theme.darkMode;
  }

  onToggleSidebarClick() {
    halfmoon.toggleSidebar();
  }

  onToggleThemeClick() {
    this.theme.toggleTheme();
  }
}
