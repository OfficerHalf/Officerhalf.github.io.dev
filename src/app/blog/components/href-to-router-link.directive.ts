import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[hrefToRouterLink]'
})
export class HrefToRouterLinkDirective implements OnInit, OnDestroy {
  private _listeners: { destroy: () => void }[] = [];

  constructor(private _router: Router, private _el: ElementRef<HTMLElement>, private _renderer: Renderer2) {}

  ngOnInit() {
    // TODO how to guarantee this directive running after all other directives without setTimeout?
    setTimeout(() => {
      const links = this._el.nativeElement.querySelectorAll('a');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (link.classList.contains('internal-link') && href) {
          this._renderer.setAttribute(link, 'routerLink', href);
          const destroyListener = this._renderer.listen(link, 'click', (_event) => {
            _event.preventDefault();
            _event.stopPropagation();
            console.log(`NAVIGATING: ${href}`);
            this._router.navigateByUrl(href);
          });
          this._listeners.push({ destroy: destroyListener });
        }
      });
    }, 0);
  }

  ngOnDestroy(): void {
    this._listeners?.forEach((listener) => listener.destroy());
    this._listeners = [];
  }
}
