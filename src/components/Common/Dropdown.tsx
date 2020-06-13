/** @jsx jsx */
import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import { theme } from '../../util/theme';
import { css, jsx } from '@emotion/core';
import { Leading } from '../Typography';

interface DropdownContentProps {
  options: {
    key?: string;
    text: string;
    onClick: (event: React.MouseEvent) => void;
  }[];
}

const tipStyle = css`
  &[data-animation='fade'][data-state='hidden'] {
    opacity: 0;
  }
  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }
  & {
    transition-property: transform, visibility, opacity;
  }
  &[data-placement^='top'] > .tippy-arrow {
    bottom: 0;
  }
  &[data-placement^='top'] > .tippy-arrow:before {
    bottom: -3px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }
  &[data-placement^='bottom'] > .tippy-arrow {
    top: 0;
  }
  &[data-placement^='bottom'] > .tippy-arrow:before {
    top: -3px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }
  &[data-placement^='left'] > .tippy-arrow {
    right: 0;
  }
  &[data-placement^='left'] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -3px;
    transform-origin: center left;
  }
  &[data-placement^='right'] > .tippy-arrow {
    left: 0;
  }
  &[data-placement^='right'] > .tippy-arrow:before {
    left: -3px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }
  &[data-inertia][data-state='visible'] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }
  .tippy-arrow {
    width: 16px;
    height: 16px;
    color: white;
  }
  .tippy-arrow:before {
    content: '';
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }
  .tippy-content {
    position: relative;
    padding: 5px 9px;
    z-index: 1;
  }
`;

const listStyle = css`
  display: block;
  color: ${theme.color.text};
  padding: 0;
  margin: 0;
  box-shadow: ${theme.elevation['4']};
  li {
    min-width: 100px;
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    padding: ${theme.space.s};
    min-height: 20px;
    background-color: white;
    transition: background-color ease-in-out 0.3s;
    text-align: center;
    &:hover {
      background-color: ${theme.color.accent};
    }
  }
`;

const DropdownContent: React.FC<DropdownContentProps> = props => {
  const { options } = props;
  return (
    <ul css={listStyle}>
      {options.map(o => (
        <li key={o.key || o.text} onClick={o.onClick}>
          <Leading
            css={css`
              margin-bottom: 0;
            `}>
            {o.text}
          </Leading>
        </li>
      ))}
    </ul>
  );
};

type DropdownProps = Omit<TippyProps & DropdownContentProps, 'content'>;

export const Dropdown: React.FC<DropdownProps> = props => {
  const { options, interactive = true, ...rest } = props;
  return (
    <Tippy
      css={tipStyle}
      interactive={interactive}
      {...rest}
      content={<DropdownContent options={options} />}
    />
  );
};
