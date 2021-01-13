import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import halfmoon from 'src/util/halfmoon';

@Injectable({
  providedIn: 'root'
})
export class HalfmoonService {
  public darkMode: BehaviorSubject<boolean>;
  public sidebar: BehaviorSubject<boolean>;

  constructor() {
    this.onDOMContentLoaded();
    this.darkMode = new BehaviorSubject(halfmoon.darkModeOn);
    this.sidebar = new BehaviorSubject<boolean>(true);
  }

  public toggleSidebar(): void {
    this.sidebar.next(!this.sidebar.value);
    halfmoon.toggleSidebar();
  }

  public toggleTheme(): void {
    this.darkMode.next(!halfmoon.darkModeOn);
    halfmoon.toggleDarkMode();
  }

  public onDOMContentLoaded(): void {
    halfmoon.onDOMContentLoaded();
  }
}
