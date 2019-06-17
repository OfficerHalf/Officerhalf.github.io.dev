import * as React from 'react';
import { space, time } from '../style/constants';
import { DrawerItemProps, DrawerItem } from './DrawerItem';

interface DrawerProps {
  open: boolean;
  items: DrawerItemProps[];
}

export const Drawer: React.FC<DrawerProps> = props => (
  <div
    className="drawer-outer-wrapper"
    style={{
      minHeight: space.pageHeight,
      transform: props.open ? undefined : `translateX(-${space.drawerWidth}px)`,
      transition: `all ${time.drawerOpen}s ease-in-out`,
      display: 'flex'
    }}
  >
    <div
      className="drawer"
      style={{
        width: space.drawerWidth,
        height: '100%',
        borderRight: '1px solid #00000040',
        paddingTop: space.medium,
        paddingBottom: space.medium
      }}
    >
      {props.items.map(itemProps => (
        <DrawerItem {...itemProps} />
      ))}
    </div>
    <div className="drawer-inner-wrapper" style={{ padding: space.medium }}>
      {props.children}
    </div>
  </div>
);
