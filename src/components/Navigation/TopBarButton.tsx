import * as React from 'react';
import cx from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { Classes } from '@blueprintjs/core';

interface TopBarButtonProps {
  active: boolean;
}

export const TopBarButton: React.FC<LinkProps & TopBarButtonProps> = props => {
  const { role, active, children, ...rest } = props;
  return (
    <Link
      {...rest}
      role="button"
      className={cx('top-bar-button', Classes.BUTTON, Classes.MINIMAL, {
        'bp3-active': active
      })}
    >
      {children}
    </Link>
  );
};
