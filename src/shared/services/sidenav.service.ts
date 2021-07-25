import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  readonly opened = new BehaviorSubject<boolean>(false);

  toggle(): void {
    this.opened.next(!this.opened.value);
  }
}
