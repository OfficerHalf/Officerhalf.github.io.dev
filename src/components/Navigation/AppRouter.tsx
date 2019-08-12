import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { StickyNav } from './StickyNav';
import { Home } from '../Home/Home';
import { Contact } from '../Contact';
import { FourZeroFour } from '../RootComponents/404';

export const Router: React.FC = props => (
  <>
    <StickyNav />
    <Switch>
      <Route exact path={routes.app.contact.base} component={Contact} />
      <Route exact path={routes.app.home.base} component={Home} />
      <Route component={FourZeroFour} />
    </Switch>
  </>
);
