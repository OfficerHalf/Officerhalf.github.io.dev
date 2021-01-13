import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import halfmoon from 'src/util/halfmoon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-site';

  constructor(private readonly router: Router) {
    // Call halfmoon.onDOMContentLoaded any time the route changes
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      halfmoon.onDOMContentLoaded();
    });
  }
}
