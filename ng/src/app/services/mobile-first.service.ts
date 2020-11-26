import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobileFirstService {
  isHandset$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches))
      .subscribe(matches => this.isHandset$.next(matches));
  }
}
