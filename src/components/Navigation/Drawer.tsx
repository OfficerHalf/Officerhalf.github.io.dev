/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Portal } from '../Common/Portal';
import { CSSTransition } from 'react-transition-group';
import { MenuItem } from '../../types/nav';
import { Close } from '../Icons';
import { theme } from '../../util/theme';
import { DrawerItem } from './DrawerItem';

const { space, color, elevation } = theme;

const drawerStyle = css`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  display: none;

  &.appear {
    display: block;
    .content {
      transform: translateX(100%);
    }
  }
  &.appear-active {
    display: block;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
    .content {
      transform: translateX(0%);
      transition: transform 300ms ease-in-out;
    }
  }
  &.enter {
    display: block;
    .content {
      transform: translateX(100%);
    }
  }
  &.enter-active {
    display: block;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
    .content {
      transform: translateX(0%);
      transition: transform 300ms ease-in-out;
    }
  }
  &.enter-done {
    display: block;
    opacity: 1;
    .content {
      transform: translateX(0%);
    }
  }
  &.exit {
    display: block;
    opacity: 1;
    .content {
      transform: translateX(0%);
    }
  }
  &.exit-active {
    display: block;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    .content {
      transform: translateX(100%);
      transition: transform 300ms ease-in-out;
    }
  }
  &.exit-done {
    .content {
      transform: translateX(100%);
    }
  }
  .content {
    width: 75%;
    height: 100%;
    transform: translateX(100%);
    background-color: white;
    float: right;
    box-shadow: ${elevation[4]};
  }
`;

const closeContainerStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 56px;
  padding-right: ${space.m};
`;

const closeStyle = css`
  width: ${space.l};
  height: ${space.l};
  fill: ${color.text};
`;

interface DrawerProps {
  open: boolean;
  onClose: React.MouseEventHandler;
  items: MenuItem[];
}

export const Drawer: React.FC<DrawerProps> = props => {
  const { open, onClose, items, ...rest } = props;
  const drawerRef = React.useRef<HTMLDivElement>(null);
  return (
    <Portal>
      <CSSTransition in={open} appear timeout={300} nodeRef={drawerRef}>
        <div ref={drawerRef} className="shade" css={drawerStyle} onClick={onClose}>
          <div className="content" {...rest} onClick={e => e.stopPropagation()}>
            <div css={closeContainerStyle}>
              <Close css={closeStyle} onClick={onClose} />
            </div>
            {items.map(i => (
              <DrawerItem key={i.id || i.text} {...i} onClose={onClose} />
            ))}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
