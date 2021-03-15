import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as Prism from 'prismjs';

// Languages
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
// Line Numbers
import 'prismjs/plugins/line-numbers/prism-line-numbers';

@Injectable({
  providedIn: 'root'
})
export class CodeHighlightService {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
