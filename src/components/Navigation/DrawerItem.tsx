/** @jsx jsx */
import React, { Fragment } from 'react';
import { MenuItem } from '../../../types/nav';
import { css, jsx } from '@emotion/core';
import { useNavigate } from '@reach/router';
import { staticTheme } from '../../util/theme';
import { ThemeContext } from '../../store/ThemeContext';

const { typography, space } = staticTheme;

interface DrawerItemProps {
  isChild?: boolean;
  onClose: React.MouseEventHandler;
}

export const DrawerItem: React.FC<MenuItem & DrawerItemProps> = props => {
  const { text, childItems, href, onClick, to, isChild = false, onClose } = props;
  const { theme } = React.useContext(ThemeContext);
  const { primary, textColor } = theme;
  const navigate = useNavigate();
  const hasChildren = React.useMemo(() => childItems !== undefined && childItems.length !== 0, [childItems]);

  const drawerItemStyle = css`
    font-size: ${typography.leading.size};
    height: 56px;
    display: flex;
    align-items: center;
    color: ${textColor.primaryText};
  `;

  const noChildrenStyle = css`
    cursor: pointer;
    &:hover {
      background-color: ${primary.main};
      color: ${primary.contrast.main};
    }
  `;

  const _onClick = React.useCallback(
    (event: React.MouseEvent) => {
      if (href || onClick || to) {
        event.persist();
        if (href) {
          window.location.href = href;
        }
        if (onClick) {
          onClick(event);
        }
        if (to) {
          navigate(to);
        }
        onClose(event);
      }
    },
    [href, navigate, onClick, onClose, to]
  );

  return (
    <Fragment>
      <div
        css={css`
          ${drawerItemStyle};
          padding-left: ${isChild ? space.xl : space.m};
          ${!hasChildren && noChildrenStyle};
        `}
        onClick={_onClick}>
        {text}
      </div>
      {hasChildren && childItems!.map(c => <DrawerItem {...c} isChild key={c.id || c.text} onClose={onClose} />)}
    </Fragment>
  );
};
