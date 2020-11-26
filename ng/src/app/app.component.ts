import { Component } from '@angular/core';
import { MobileFirstService } from './services/mobile-first.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nathan Smith';

  constructor(readonly mobileFirst: MobileFirstService, readonly themeService: ThemeService) {
    themeService.load();
  }
}
