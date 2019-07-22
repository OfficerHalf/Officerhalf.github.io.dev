import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../Home';
import { Contact } from '../Contact';
import { TopBar } from './TopBar';
import '../../styles/components/Navigation/Router.scss';

export const Router: React.FC = props => (
  <>
    <TopBar />
    <div className="router-wrapper">
      <Switch>
        <Route path={routes.app.contact.base} component={Contact} />
        <Route path={routes.app.home.base} component={Home} />
      </Switch>
    </div>
  </>
);
