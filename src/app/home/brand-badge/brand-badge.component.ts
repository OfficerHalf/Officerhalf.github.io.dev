import { Component, input } from '@angular/core';

import { IconComponent } from '../../icon/icon.component';
import { IconName } from '../../icon/icons.constant';

export enum Brand {
  GitHub,
  Foundry,
  Storybook,
  VisualStudio,
}

const brandMap: Record<Brand, { label: string; icon: IconName }> = {
  [Brand.GitHub]: { label: 'GitHub', icon: 'github' },
  [Brand.Storybook]: { label: 'Storybook', icon: 'book-a' },
  [Brand.Foundry]: { label: 'Foundry VTT', icon: 'dices' },
  [Brand.VisualStudio]: {
    label: 'Visual Studio Marketplace',
    icon: 'code',
  },
};

@Component({
  selector: 'app-brand-badge',
  template: `
    <a class="brand-badge" [href]="href()"
      ><app-icon [icon]="brandMap[brand()].icon" /> View on
      {{ brandMap[brand()].label }}
      <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i
    ></a>
  `,
  styleUrls: ['./brand-badge.component.css'],
  imports: [IconComponent],
  standalone: true,
})
export class BrandBadgeComponent {
  protected brandMap = brandMap;
  brand = input<Brand>(Brand.GitHub);
  href = input<string>('');
}
