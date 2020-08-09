/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  const { primary, textColor, space, dark } = React.useContext(ThemeContext);
  const buttonStyle = css`
    box-shadow: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    padding: ${space.s};
    background-color: ${primary.main};
    color: ${primary.contrast.main};
    &:hover {
      background-color: ${dark ? primary.lighter : primary.darker};
    }
    &:active,
    &:focus {
      outline: none;
    }
  `;
  return <button css={buttonStyle} ref={ref} {...props} />;
});
