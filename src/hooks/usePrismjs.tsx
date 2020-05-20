import React from 'react';
import Prismjs from 'prismjs';
import '../util/prismjs-alloy.scss';
require('prismjs/plugins/line-numbers/prism-line-numbers');

export function usePrismjs<T extends HTMLElement>(
  target: React.RefObject<T>,
  plugins: string[] = []
) {
  React.useEffect(() => {
    if (target.current) {
      if (plugins.length > 0) {
        target.current.classList.add(...plugins);
      }
      Prismjs.highlightAllUnder(target.current);
    }
  }, [target, plugins]);
}
