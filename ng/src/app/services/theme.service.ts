import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private theme: Theme;
  // Define prefix for clearer and more readable class names in scss files
  private colorSchemePrefix = 'theme-';

  constructor(rendererFactory: RendererFactory2) {
    // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  _detectPrefersColorScheme(): void {
    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise set to light.
      this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light;
    } else {
      // If the browser doesn't support prefers-color-scheme, set it as default to dark
      this.theme = Theme.Dark;
    }
  }

  _setColorScheme(theme: Theme): void {
    this.theme = theme;
    // Save prefers-color-scheme to localStorage
    localStorage.setItem('prefers-color', theme);
  }

  _getColorScheme(): void {
    // Check if any prefers-color-scheme is stored in localStorage
    if (localStorage.getItem('prefers-color')) {
      // Save prefers-color-scheme from localStorage
      this.theme = localStorage.getItem('prefers-color') as Theme;
    } else {
      // If no prefers-color-scheme is stored in localStorage, try to detect OS default prefers-color-scheme
      this._detectPrefersColorScheme();
    }
  }

  load(): void {
    this._getColorScheme();
    this.renderer.addClass(document.body, this.colorSchemePrefix + this.theme);
  }

  toggle(): void {
    const newTheme = this.theme === Theme.Dark ? Theme.Light : Theme.Dark;
    const oldTheme = this.theme;
    this._setColorScheme(newTheme);
    // Remove the old color-scheme class
    this.renderer.removeClass(document.body, this.colorSchemePrefix + oldTheme);
    // Add the new / current color-scheme class
    this.renderer.addClass(document.body, this.colorSchemePrefix + newTheme);
  }

  currentActive(): Theme {
    return this.theme;
  }
}
