import * as React from 'react';
import { css } from 'glamor';
import { space, color, type } from '../style/constants';
import { HashLink as Link } from 'react-router-hash-link';

export interface DrawerItemProps {
  label: string;
  hasChildren?: boolean;
  path?: string;
  onClick?: (label: string) => any;
  depth?: number;
}

export const DrawerItem: React.FC<DrawerItemProps> = props => {
  const {
    label,
    hasChildren = false,
    path,
    onClick,
    depth = 0,
    ...rest
  } = props;
  const style = css({
    padding: space.medium,
    paddingLeft: space.large * (depth + 1),
    fontWeight: hasChildren ? 700 : undefined,
    cursor: path || onClick ? 'pointer' : undefined,
    ':hover':
      path || onClick ? { backgroundColor: 'rgba(0, 0, 0, 0.08)' } : undefined,
    display: 'block',
    textDecoration: 'none',
    color: color.text,
    ':active': color.text,
    ':visited': color.text,
    ':focus': color.text,
    fontFamily: type.emphFont
  });
  if (path !== undefined) {
    return (
      <Link to={path} {...style} {...rest}>
        {label}
      </Link>
    );
  } else {
    return (
      <div
        onClick={onClick ? () => onClick(label) : undefined}
        {...style}
        {...rest}
      >
        {label}
      </div>
    );
  }
};
