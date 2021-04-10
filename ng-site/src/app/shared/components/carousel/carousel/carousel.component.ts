import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { delay, repeat, takeUntil } from 'rxjs/operators';
import { CarouselItemDirective } from '../carousel-item.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective> = new QueryList();
  @Input() delayMs = 4000;
  readonly currentItem = new BehaviorSubject<number>(-1);
  private readonly stop = new Subject<void>();

  constructor() {}

  ngAfterViewInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stop.next();
    this.stop.complete();
  }

  private startCarousel(startIndex = 0) {
    // Only works with 3+ items.
    if (this.items.length > 1) {
      this.currentItem.next(startIndex);
      this.items.get(startIndex)?.elementRef.nativeElement.classList.add('carousel-item__showing');
      this.items
        .get((startIndex + 1) % this.items.length)
        ?.elementRef.nativeElement.classList.add('carousel-item__next');
      this.currentItem.pipe(takeUntil(this.stop), delay(this.delayMs), repeat()).subscribe(current => {
        this.items.forEach((item, itemIndex) => {
          if (itemIndex === current) {
            item.elementRef.nativeElement.classList.add('carousel-item__hiding');
            item.elementRef.nativeElement.classList.remove('carousel-item__showing');
          } else if (itemIndex === (current + 1) % this.items.length) {
            item.elementRef.nativeElement.classList.add('carousel-item__showing');
            item.elementRef.nativeElement.classList.remove('carousel-item__next');
          } else if (itemIndex === (current + 2) % this.items.length) {
            item.elementRef.nativeElement.classList.add('carousel-item__next');
          } else {
            item.elementRef.nativeElement.classList.remove('carousel-item__hiding');
          }
        });
        this.currentItem.next((current + 1) % this.items.length);
      });
    }
  }
}
