import React from 'react';
import { createPortal } from 'react-dom';

export const Portal = React.memo(props => {
  const [parentNode, setParentNode] = React.useState<HTMLDivElement>();
  const contentNode = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (!parentNode) {
      let element = document.getElementById('portal-container');
      if (!element) {
        element = document.createElement('div');
        element.id = 'portal-container';
        document.body.appendChild(element);
      }
      setParentNode(element as HTMLDivElement);
    }
  }, [parentNode]);

  React.useEffect(() => {
    if (parentNode && !contentNode.current) {
      contentNode.current = document.createElement('div');
      parentNode.appendChild(contentNode.current);
    }
    return () => {
      if (contentNode.current) {
        parentNode.removeChild(contentNode.current);
      }
    };
  }, [parentNode]);

  return parentNode && contentNode.current ? createPortal(props.children, contentNode.current) : null;
});
