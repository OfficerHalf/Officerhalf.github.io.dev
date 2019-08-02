import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../Home';
import { Contact } from '../Contact';
import { FourZeroFour } from '../RootComponents/404';
import { TopBar } from './TopBar';
import '../../styles/components/Navigation/Router.scss';

export const Router: React.FC = props => (
  <>
    <TopBar />
    <div className="router-wrapper">
      <Switch>
        <Route exact path={routes.app.contact.base} component={Contact} />
        <Route exact path={routes.app.home.base} component={Home} />
        <Route component={FourZeroFour} />
      </Switch>
    </div>
  </>
);
