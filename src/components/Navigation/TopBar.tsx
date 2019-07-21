import * as React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from '@blueprintjs/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes, Route } from '../../constants/routes';
import { TopBarButton } from './TopBarButton';
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
        <TopBarButton to={routes.home.base} active={active === Route.Home}>
          Home
        </TopBarButton>
        <TopBarButton
          to={routes.contact.base}
          active={active === Route.Contact}
        >
          Contact
        </TopBarButton>
      </NavbarGroup>
    </Navbar>
  );
};

export const TopBar = withRouter(TopBarBase);
