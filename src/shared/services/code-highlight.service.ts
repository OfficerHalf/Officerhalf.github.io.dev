import { Injectable } from '@angular/core';
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
  highlightAll() {
    Prism.highlightAll();
  }

  highlightAllUnder(element: HTMLElement, lineNumbers = true) {
    if (lineNumbers) {
      element.classList.add('line-numbers');
    }
    Prism.highlightAllUnder(element);
  }
}
