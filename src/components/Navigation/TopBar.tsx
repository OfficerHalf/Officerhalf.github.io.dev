import * as React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Tabs,
  Tab
} from '@blueprintjs/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes, Route } from '../../constants/routes';
import '../../styles/components/Navigation/TopBar.scss';

const TopBarBase: React.FC<RouteComponentProps> = props => {
  let active: Route;
  if (props.location.pathname.startsWith(routes.contact.base)) {
    active = Route.Contact;
  } else {
    active = Route.Home;
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
          <Tab id={Route.Home} title="Home" />
          <Tab id={Route.Contact} title="Contact" />
        </Tabs>
      </NavbarGroup>
    </Navbar>
  );
};

export const TopBar = withRouter(TopBarBase);
