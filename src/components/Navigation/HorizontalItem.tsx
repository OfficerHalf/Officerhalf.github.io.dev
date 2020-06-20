/** @jsx jsx */
import React from 'react';
import { MenuItem } from '../../types/nav';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { useNavigate } from 'react-router';
import { Dropdown } from '../Common/Dropdown';

const { typography, space } = theme;

const horizontalItemStyle = css`
  font-size: ${typography.title.size};
  display: block;
  margin: 0;
  margin-left: ${space.l};
  cursor: pointer;
`;

const noChildrenStyle = css`
  &:hover {
    text-decoration: underline;
  }
`;

export const HorizontalItem: React.FC<MenuItem> = props => {
  const { text, childItems, href, onClick, to } = props;
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
      }
    },
    [href, navigate, onClick, to]
  );

  if (hasChildren) {
    return (
      <Dropdown options={childItems!} arrow>
        <li css={horizontalItemStyle}>{text}</li>
      </Dropdown>
    );
  } else {
    return (
      <li
        css={css`
          ${horizontalItemStyle};
          ${noChildrenStyle};
        `}
        onClick={_onClick}>
        {text}
      </li>
    );
  }
};
