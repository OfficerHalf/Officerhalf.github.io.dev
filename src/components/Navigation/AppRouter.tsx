import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../Home/Home';
import { Contact } from '../Contact';
import { FourZeroFour } from '../RootComponents/404';
import { Alloy } from '../Projects/Alloy';
import { Homebrewery } from '../Projects/Homebrewery';
import { CSRG } from '../Projects/CSRG';
import { UserManagement } from '../Projects/UserManagement';

export const Router: React.FC = props => (
  <Switch>
    <Route
      exact
      path={routes.app.project.userManagement.base}
      component={UserManagement}
    />
    <Route exact path={routes.app.project.csrg.base} component={CSRG} />
    <Route
      exact
      path={routes.app.project.homebrewery.base}
      component={Homebrewery}
    />
    <Route exact path={routes.app.project.alloy.base} component={Alloy} />
    <Route exact path={routes.app.contact.base} component={Contact} />
    <Route exact path={routes.app.home.base} component={Home} />
    <Route component={FourZeroFour} />
  </Switch>
);
