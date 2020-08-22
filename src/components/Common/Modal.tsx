/** @jsx jsx */
import React from 'react';
import cx from 'classnames';
import { css, jsx } from '@emotion/core';
import { Portal } from './Portal';
import { Shade } from './Shade';
import { ThemeContext } from '../../store/ThemeContext';
import { Title } from '../Typography';
import { Close } from '../Icons';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  animationTimeoutMs?: number;
}

export const Modal = React.forwardRef<
  HTMLDivElement,
  ModalProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  const { background, elevation, space, textColor } = React.useContext(ThemeContext);
  const { title, onClose, open, animationTimeoutMs = 300, className, ...rest } = props;

  const iconStyle = css`
    width: ${space.l};
    margin-left: ${space.s};
    fill: ${textColor.accentText};
    cursor: pointer;
    &:hover {
      fill: ${textColor.primaryText};
    }
  `;

  return (
    <Portal>
      <Shade
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity ${animationTimeoutMs}ms;
          &.open {
            opacity: 1;
            pointer-events: initial;
          }
        `}
        className={cx({ open })}>
        <div
          ref={ref}
          css={css`
            border-radius: ${space.s};
            margin: ${space.s};
            background-color: ${background.background};
            box-shadow: ${elevation[2]};
            padding: ${space.l};
            transition: all ${animationTimeoutMs}ms;
            transform: translateY(15vh);
            &.open {
              transform: translateY(0px);
            }
          `}
          {...rest}
          className={cx({ open }, className)}>
          <div
            css={css`
              display: flex;
              margin-bottom: ${space.s};
            `}>
            {title && <Title>{title}</Title>}
            {onClose && (
              <div
                css={css`
                  flex-grow: 1;
                `}
              />
            )}
            {onClose && <Close css={iconStyle} onClick={onClose} />}
          </div>
          <div>{props.children}</div>
        </div>
      </Shade>
    </Portal>
  );
});
