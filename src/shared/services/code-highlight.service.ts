import { Injectable } from '@angular/core';
import * as Prism from 'prismjs';

// Languages
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';

// Line Numbers
import 'prismjs/plugins/line-numbers/prism-line-numbers';

@Injectable({
  providedIn: 'root'
})
export class CodeHighlightService {
  highlightAllUnder(element: HTMLElement, lineNumbers = true) {
    if (lineNumbers) {
      element.classList.add('line-numbers');
    }
    Prism.highlightAllUnder(element);
  }
}
