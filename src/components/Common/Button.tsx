/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';

type ButtonProps = {
  styleType?: 'primary' | 'hollow';
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { styleType = 'primary', ...rest } = props;
  const { primary, textColor, space, dark } = React.useContext(ThemeContext);
  const buttonStyle = css`
    box-shadow: none;
    border: ${`2px solid ${styleType === 'primary' ? 'transparent' : primary.main}`};
    cursor: pointer;
    border-radius: 4px;
    padding: ${space.s};
    background-color: ${styleType === 'primary' ? primary.main : 'transparent'};
    color: ${primary.contrast.main};
    &:hover {
      background-color: ${dark ? primary.lighter : primary.darker};
      border: ${`2px solid ${styleType === 'primary' ? 'transparent' : dark ? primary.lighter : primary.darker}`};
    }
    &:active,
    &:focus {
      outline: none;
    }
  `;
  return <button css={buttonStyle} ref={ref} {...rest} />;
});
