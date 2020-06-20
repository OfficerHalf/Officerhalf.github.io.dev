/** @jsx jsx */
import React from 'react';
import { MenuItem } from '../../types/nav';
import { css, jsx } from '@emotion/core';
import { HorizontalItem } from './HorizontalItem';

interface HorizontalProps {
  items: MenuItem[];
}

export const Horizontal: React.FC<HorizontalProps> = props => {
  const { items } = props;
  return (
    <ul
      css={css`
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      `}>
      {items.map(i => (
        <HorizontalItem {...i} />
      ))}
    </ul>
  );
};
