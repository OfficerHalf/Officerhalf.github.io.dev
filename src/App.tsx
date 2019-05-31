import * as React from 'react';
import { css } from 'glamor';
import { TopNav } from './components/TopNav';
import { space, media } from './style/constants';
import { Drawer } from './components/Drawer';

const appStyle = css({
  width: '100vw',
  '@media (min-width: 400px)': {
    width: 'inital'
  }
});

export const App: React.FC = props => (
  <div>
    <TopNav />
    <div id="app-wrapper" style={{ display: 'flex' }}>
      <Drawer />
      <div id="app-content" style={{ marginTop: space.headerHeight }}>
        hello
      </div>
    </div>
  </div>
);
