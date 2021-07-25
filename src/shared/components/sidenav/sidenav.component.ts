import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SidenavService } from 'src/shared/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  constructor(readonly sidenavService: SidenavService) {}
}
