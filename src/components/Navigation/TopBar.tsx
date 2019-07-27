import * as React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Tabs,
  Tab
} from '@blueprintjs/core';
import { Linkedin, Github } from '../Icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes, AppRoute } from '../../constants/routes';
import '../../styles/components/Navigation/TopBar.scss';

const TopBarBase: React.FC<RouteComponentProps> = props => {
  let active: AppRoute;
  if (props.location.pathname.startsWith(routes.app.contact.base)) {
    active = AppRoute.Contact;
  } else {
    active = AppRoute.Home;
  }
  return (
    <Navbar className="top-bar bp3-dark">
      <NavbarGroup>
        <NavbarHeading>Nathan Smith</NavbarHeading>
        <NavbarDivider />
        <Tabs
          selectedTabId={active}
          onChange={(route: string) => props.history.push(route)}
        >
          <Tab id={AppRoute.Home} title="Home" />
          <Tab id={AppRoute.Contact} title="Contact" />
        </Tabs>
      </NavbarGroup>
      <NavbarGroup align="right">
        <Linkedin />
        <Github />
      </NavbarGroup>
    </Navbar>
  );
};

export const TopBar = withRouter(TopBarBase);
