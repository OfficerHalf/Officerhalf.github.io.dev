/** @jsx jsx */
import React, { Fragment } from 'react';
import { MenuItem } from '../../../types/nav';
import { css, jsx } from '@emotion/core';
import { HorizontalItem } from './HorizontalItem';
import { ThemeContext } from '../../store/ThemeContext';

interface HorizontalProps {
  items: MenuItem[];
}

export const Horizontal: React.FC<HorizontalProps> = props => {
  const { items } = props;
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <Fragment>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
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
