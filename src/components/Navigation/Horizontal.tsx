import React from 'react';
import { MenuItem } from '../../types/nav';

interface HorizontalProps {
  items: MenuItem[];
}

export const Horizontal: React.FC<HorizontalProps> = props => {
  const { items } = props;
  return (
    <ul>
      {items.map(i => (
        <li key={i.id || i.text}>{i.text}</li>
      ))}
    </ul>
  );
};
