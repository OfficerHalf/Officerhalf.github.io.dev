/** @jsx jsx */
import React, { Fragment } from 'react';
import { MenuItem } from '../../types/nav';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { useNavigate } from 'react-router';

const { typography, color, space } = theme;

const drawerItemStyle = css`
  font-size: ${typography.leading.size};
  height: 56px;
  display: flex;
  align-items: center;
`;

const noChildrenStyle = css`
  cursor: pointer;
  &:hover {
    background-color: ${color.accent};
  }
`;

interface DrawerItemProps {
  isChild?: boolean;
  onClose: React.MouseEventHandler;
}

export const DrawerItem: React.FC<MenuItem & DrawerItemProps> = props => {
  const { text, childItems, href, onClick, to, isChild = false, onClose } = props;
  const navigate = useNavigate();
  const hasChildren = React.useMemo(() => childItems !== undefined && childItems.length !== 0, [childItems]);

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
