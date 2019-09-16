import * as React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Menu, Divider } from 'antd';
import { routes } from '../../constants/routes';

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
        <Menu.Item>
          <Link to={routes.app.home.base}>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={routes.app.contact.base}>Contact</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export const TopBar = withRouter(TopBarBase);
