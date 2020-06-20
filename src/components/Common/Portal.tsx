import React from 'react';
import { createPortal } from 'react-dom';

export const Portal = React.memo(props => {
  const domNode = React.useRef<HTMLDivElement>();

  if (!domNode.current) {
    let element = document.getElementById('drawer-portal');
    if (!element) {
      element = document.createElement('div');
      element.id = 'drawer-portal';
      document.body.appendChild(element);
    }
    domNode.current = element as HTMLDivElement;
  }

  return domNode.current ? createPortal(props.children, domNode.current) : null;
});
