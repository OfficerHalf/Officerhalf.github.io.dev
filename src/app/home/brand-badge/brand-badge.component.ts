import { Component, Input } from "@angular/core";

export enum Brand {
  GitHub,
  Foundry,
  Storybook,
  VisualStudio,
}

const brandMap: Record<Brand, { label: string; icon: string }> = {
  [Brand.GitHub]: { label: "GitHub", icon: "fa-brands fa-github" },
  [Brand.Storybook]: { label: "Storybook", icon: "fa-solid fa-book" },
  [Brand.Foundry]: { label: "Foundry VTT", icon: "fa-solid fa-dice-d20" },
  [Brand.VisualStudio]: {
    label: "Visual Studio Marketplace",
    icon: "fa-brands fa-microsoft",
  },
};

@Component({
  selector: "app-brand-badge",
  template: `
    <a class="brand-badge" [href]="href"
      ><i [className]="brandMap[brand].icon"></i> View on
      {{ brandMap[brand].label }}
      <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i
    ></a>
  `,
  styleUrls: ["./brand-badge.component.scss"],
})
export class BrandBadgeComponent {
  protected brandMap = brandMap;
  @Input() brand: Brand = Brand.GitHub;
  @Input() href: string = "";
}
