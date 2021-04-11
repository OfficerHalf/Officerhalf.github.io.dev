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
import { CarouselState } from '../carousel.enum';

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
    if (this.items.length > 2) {
      this.currentItem.next(startIndex);
      this.items.get(startIndex)?.elementRef.nativeElement.classList.add(CarouselState.Showing);
      this.items.get((startIndex + 1) % this.items.length)?.elementRef.nativeElement.classList.add(CarouselState.Next);
      this.currentItem.pipe(takeUntil(this.stop), delay(this.delayMs), repeat()).subscribe(current => {
        this.items.forEach((item, itemIndex) => {
          if (itemIndex === current) {
            item.elementRef.nativeElement.classList.add(CarouselState.Hiding);
            item.elementRef.nativeElement.classList.remove(CarouselState.Showing);
          } else if (itemIndex === (current + 1) % this.items.length) {
            item.elementRef.nativeElement.classList.add(CarouselState.Showing);
            item.elementRef.nativeElement.classList.remove(CarouselState.Next);
          } else if (itemIndex === (current + 2) % this.items.length) {
            item.elementRef.nativeElement.classList.add(CarouselState.Next);
          } else {
            item.elementRef.nativeElement.classList.remove(CarouselState.Hiding);
          }
        });
        this.currentItem.next((current + 1) % this.items.length);
      });
    } else if (this.items.length === 2) {
      this.currentItem.next(startIndex);
      this.items.get(startIndex)?.elementRef.nativeElement.classList.add(CarouselState.Showing);
      this.items
        .get((startIndex + 1) % this.items.length)
        ?.elementRef.nativeElement.classList.add(CarouselState.Hiding);
      this.currentItem.pipe(takeUntil(this.stop), delay(this.delayMs / 3), repeat()).subscribe(current => {
        const currentItem = this.items.get(current);
        const nextItem = this.items.get((current + 1) % 2);
        if (nextItem?.elementRef.nativeElement.classList.contains(CarouselState.Hiding)) {
          nextItem.elementRef.nativeElement.classList.remove(CarouselState.Hiding);
          this.currentItem.next(current);
        } else if (nextItem?.elementRef.nativeElement.classList.contains(CarouselState.Next)) {
          nextItem.elementRef.nativeElement.classList.add(CarouselState.Showing);
          nextItem.elementRef.nativeElement.classList.remove(CarouselState.Next);
          currentItem?.elementRef.nativeElement.classList.add(CarouselState.Hiding);
          currentItem?.elementRef.nativeElement.classList.remove(CarouselState.Showing);
          this.currentItem.next((current + 1) % 2);
        } else {
          nextItem?.elementRef.nativeElement.classList.add(CarouselState.Next);
          this.currentItem.next(current);
        }
      });
    } else if (this.items.length === 1) {
      this.items.get(0)?.elementRef.nativeElement.classList.add(CarouselState.Showing);
    }
  }
}
