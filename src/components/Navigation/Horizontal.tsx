/** @jsx jsx */
import React, { Fragment } from 'react';
import { MenuItem } from '../../../types/nav';
import { css, jsx } from '@emotion/core';
import { HorizontalItem } from './HorizontalItem';
import { ThemeContext } from '../../store/ThemeContext';
import { staticTheme } from '../../util/theme';
import { Adjust } from '../Icons';
import { ToggleSwitch } from '../Common/ToggleSwitch';

interface HorizontalProps {
  items: MenuItem[];
}

const { space } = staticTheme;

export const Horizontal: React.FC<HorizontalProps> = props => {
  const { items } = props;
  const { theme, toggleTheme, dark } = React.useContext(ThemeContext);
  const { background } = theme;
  return (
    <Fragment>
      <div
        css={css`
          display: flex;
        `}>
        <Adjust
          css={css`
            height: ${space.l};
            width: ${space.l};
            margin-right: ${space.s};
            fill: ${dark ? background.background : background.background20};
            transform: rotate(${dark ? '180deg' : '0deg'});
          `}
        />
        <ToggleSwitch checked={dark} onChange={toggleTheme} />
      </div>
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
