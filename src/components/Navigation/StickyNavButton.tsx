import * as React from 'react';

interface StickyNavButtonProps {
  onClick: (e: React.MouseEvent) => void;
  active: boolean;
}

export const StickyNavButton: React.FC<StickyNavButtonProps> = props => (
  <li onClick={props.onClick} style={{ listStyle: 'none', display: 'flex' }}>
    {props.children}
    <svg viewBox="0 0 100 100" width="50px">
      <circle cx="50" cy="50" r="50" />
    </svg>
  </li>
);
