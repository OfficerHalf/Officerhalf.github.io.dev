/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';

export const TransparentInput = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((props, ref) => {
  const { textColor } = React.useContext(ThemeContext);
  return (
    <input
      {...props}
      ref={ref}
      css={css`
        border: none;
        background-color: transparent;
        outline: none;
        color: ${textColor.primaryText};
        &::placeholder {
          color: ${textColor.accentText};
        }
      `}
    />
  );
});
