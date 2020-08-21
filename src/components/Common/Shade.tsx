/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';
import color from 'color';

export const Shade = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  const { background, dark, textColor } = React.useContext(ThemeContext);
  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        overflow: hidden;
        background-color: ${dark
          ? color(background.background).alpha(0.7).string()
          : color(textColor.primaryText).alpha(0.7).string()};
      `}
      {...props}
    />
  );
});
