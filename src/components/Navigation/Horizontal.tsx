/** @jsx jsx */
import React, { Fragment } from 'react';
import { MenuItem } from '../../../types/nav';
import { css, jsx } from '@emotion/core';
import { HorizontalItem } from './HorizontalItem';

interface HorizontalProps {
  items: MenuItem[];
}

export const Horizontal: React.FC<HorizontalProps> = props => {
  const { items } = props;
  return (
    <Fragment>
      <ul
        css={css`
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
        `}>
        {items.map(item => (
          <HorizontalItem key={item.id || item.text} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};
