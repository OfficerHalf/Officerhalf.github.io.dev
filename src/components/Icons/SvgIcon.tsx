import * as React from 'react';
import cx from 'classnames';
import { IIntentProps, Classes } from '@blueprintjs/core';

export const SvgIcon: React.FC<IIntentProps> = props => {
  const { intent, ...rest } = props;
  const classes = cx(Classes.ICON, Classes.intentClass(intent));
  return <span className={classes} {...rest} />;
};
