import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-image-compare-slider',
  templateUrl: './image-compare-slider.component.html',
  styleUrls: ['./image-compare-slider.component.scss']
})
export class ImageCompareSliderComponent {
  @Input() leftSrc = '';
  @Input() rightSrc = '';
  @Input() maxWidth = '';
  @ViewChild('comparer') private comparer!: ElementRef<HTMLDivElement>;
  @ViewChild('right') private right!: ElementRef<HTMLDivElement>;
  sliderPosition = 50;
  held = false;

  constructor() {}

  getCursorPosition(event: MouseEvent | TouchEvent): number {
    const rect = this.right.nativeElement.getBoundingClientRect();
    let x: number;
    if (event instanceof MouseEvent) {
      x = event.pageX - rect.left;
    } else {
      x = event.touches[0].clientX - rect.left;
    }
    return ((x - window.pageXOffset) / this.comparer.nativeElement.clientWidth) * 100;
  }

  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  slide(event: MouseEvent | TouchEvent): void {
    if (!this.held) {
      return;
    }
    this.sliderPosition = this.getCursorPosition(event);
  }

  holdSlider(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.held = true;
    window.addEventListener('mouseup', this.releaseSlider.bind(this));
    window.addEventListener('touchend', this.releaseSlider.bind(this));
  }

  releaseSlider(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.held = false;
    window.removeEventListener('mouseup', this.releaseSlider.bind(this));
    window.removeEventListener('touchend', this.releaseSlider.bind(this));
  }

  getSliderPosition(x: number): string {
    return `${Math.min(Math.max(x, 0), 100)}%`;
  }
}
