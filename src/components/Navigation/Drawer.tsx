/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { MenuItem } from '../../../types/nav';
import { Close, Adjust } from '../Icons';
import { staticTheme } from '../../util/theme';
import { DrawerItem } from './DrawerItem';
import { ToggleSwitch } from '../Common/ToggleSwitch';
import { ThemeContext } from '../../store/ThemeContext';
import { Portal } from '../Common/Portal';
import cx from 'classnames';

const { space, elevation } = staticTheme;

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export const Drawer: React.FC<DrawerProps> = props => {
  const { open, onClose, items, ...rest } = props;
  const [show, setShow] = React.useState<boolean>(open);
  const { dark, theme, toggleTheme } = React.useContext(ThemeContext);
  const { textColor, background, primary } = theme;

  React.useEffect(() => {
    setShow(open);
  }, [open]);

  const drawerStyle = css`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: none;
    overflow: hidden;
    &.open {
      display: block;
    }
    .content {
      width: 75%;
      height: 100%;
      transform: translateX(100%);
      background-color: ${dark ? background.background10 : background.background};
      float: right;
      box-shadow: ${elevation[4]};
      transition: transform 300ms ease-in-out;
      &.show {
        transform: translateX(0%);
      }
    }
  `;

  const closeContainerStyle = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 56px;
    padding-right: ${space.m};
    padding-left: ${space.m};
  `;

  const closeStyle = css`
    width: ${space.l};
    height: ${space.l};
    fill: ${textColor.primaryText};
    cursor: pointer;
  `;

  const drawerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Portal>
      <div ref={drawerRef} className={cx('shade', { open })} css={drawerStyle} onClick={onClose}>
        <div className={cx('content', { show })} {...rest} onClick={e => e.stopPropagation()}>
          <div css={closeContainerStyle}>
            <Close css={closeStyle} onClick={onClose} />
          </div>
          <div css={closeContainerStyle}>
            <Adjust
              css={css`
                height: ${space.l};
                width: ${space.l};
                margin-right: ${space.s};
                fill: ${dark ? primary.lighter : background.background20};
                transform: rotate(${dark ? '0deg' : '180deg'});
              `}
            />
            <ToggleSwitch checked={dark} onChange={toggleTheme} />
          </div>
          {items.map(i => (
            <DrawerItem key={i.id || i.text} {...i} onClose={onClose} />
          ))}
        </div>
      </div>
    </Portal>
  );
};
