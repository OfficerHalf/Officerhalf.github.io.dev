/** @jsx jsx */
import React, { Fragment } from 'react';
import { MenuItem } from '../../../types/nav';
import { css, jsx } from '@emotion/core';
import { HorizontalItem } from './HorizontalItem';
import { useTheme } from 'emotion-theming';
import { EmotionTheme, lightTheme, darkTheme } from '../../util/theme';

interface HorizontalProps {
  items: MenuItem[];
}

export const Horizontal: React.FC<HorizontalProps> = props => {
  const { items } = props;
  const { setTheme, dark } = useTheme<EmotionTheme>();
  const toggleTheme = () => {
    if (dark) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };
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
