import { Component, ElementRef, effect, input } from '@angular/core';
import { IconName, Icons } from './icons.constant';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: ``,
  styleUrl: './icon.component.css',
})
export class IconComponent {
  icon = input.required<IconName>();
  constructor(private el: ElementRef<HTMLElement>) {
    effect(() => {
      this.el.nativeElement.innerHTML = Icons[this.icon()];
    });
  }
}
