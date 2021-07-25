import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { SidenavService } from 'src/shared/services/sidenav.service';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  collapseNav = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    readonly sidenavService: SidenavService
  ) {
    // Show / hide menu button
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .pipe(distinctUntilKeyChanged('matches'))
      .subscribe(result => {
        this.collapseNav.next(result.matches);
        this.sidenavService.opened.next(false);
      });
  }
}
