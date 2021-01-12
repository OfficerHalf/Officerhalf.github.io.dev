import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import halfmoon from 'src/util/halfmoon';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public darkMode: BehaviorSubject<boolean>;

  constructor() {
    halfmoon.onDOMContentLoaded();
    this.darkMode = new BehaviorSubject(halfmoon.darkModeOn);
  }

  public toggleTheme() {
    this.darkMode.next(!halfmoon.darkModeOn);
    halfmoon.toggleDarkMode();
  }
}
