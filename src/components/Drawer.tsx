import * as React from 'react';
import { css } from 'glamor';
import { space, media } from '../style/constants';

const drawerStyle = css({
  width: space.drawerWidth,
  height: '100vh',
  backgroundColor: 'blue'
});

export const Drawer: React.FC = props => <div {...drawerStyle}>drawer</div>;
