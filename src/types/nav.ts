import React from 'react';

export interface MenuItem {
  id?: string;
  text: string;
  onClick?: React.MouseEventHandler;
  to?: string;
  href?: string;
  childItems?: MenuItem[];
}
