import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]'
})
export class CarouselItemDirective {
  constructor(public elementRef: ElementRef<HTMLElement>) {
    const hostClass = this.elementRef.nativeElement.classList;
    hostClass.add('carousel-item');
  }
}
