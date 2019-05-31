import * as React from 'react';
import { css } from 'glamor';
import { space } from '../style/constants';

const topStyle = css({
  position: 'fixed',
  backgroundColor: 'black',
  display: 'flex',
  width: '100%',
  height: space.headerHeight,
  top: 0
});

export const TopNav: React.FC = props => (
  <nav {...topStyle}>
    <span style={{ flexGrow: 1 }}>Nathan Smith</span>
  </nav>
);
