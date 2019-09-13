import * as React from 'react';
import { Linkedin, Github } from '../Icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes, AppRoute } from '../../constants/routes';
import { Menu, Divider } from 'antd';

const TopBarBase: React.FC<RouteComponentProps> = props => {
  return (
    <>
      <span className="logo" style={{ color: 'white', paddingRight: 20 }}>
        Nathan Smith
      </span>
      <Divider type="vertical" />
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px', display: 'inline-block' }}
      >
        <Menu.Item>Home</Menu.Item>
      </Menu>
    </>
  );
};

export const TopBar = withRouter(TopBarBase);
