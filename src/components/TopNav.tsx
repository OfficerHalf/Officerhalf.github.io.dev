import * as React from 'react';
import { space, zIndex, color, type } from '../style/constants';
import { Menu, Back } from './Icons';

const topStyle: React.CSSProperties = {
  position: 'fixed',
  backgroundColor: color.header,
  display: 'flex',
  width: '100%',
  height: space.headerHeight,
  top: 0,
  zIndex: zIndex.header,
  alignItems: 'center'
};

const iconStyle: React.CSSProperties = {
  fill: 'white',
  width: space.headerIcon,
  height: space.headerHeight,
  marginLeft: (space.headerHeight - space.headerIcon) / 2,
  marginRight: (space.headerHeight - space.headerIcon) / 2
};

const textStyle: React.CSSProperties = {};

interface TopNavProps {
  hamburgerCallback: () => any;
  drawerOpen: boolean;
}

export const TopNav: React.FC<TopNavProps> = props => (
  <nav style={topStyle}>
    {!props.drawerOpen && (
      <Menu onClick={props.hamburgerCallback} style={iconStyle} />
    )}
    {props.drawerOpen && (
      <Back onClick={props.hamburgerCallback} style={iconStyle} />
    )}
    <span className="breadcrumbs" style={{ flexGrow: 1 }} />
    <span>
      <h2
        style={{
          margin: 0,
          marginRight: space.large,
          color: 'white',
          fontFamily: type.emphFont,
          fontWeight: 500
        }}
      >
        Nathan Smith
      </h2>
    </span>
  </nav>
);
