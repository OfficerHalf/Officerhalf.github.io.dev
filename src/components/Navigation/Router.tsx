import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../Home';
import { Contact } from '../Contact';
import { TopBar } from './TopBar';
import '../../styles/components/Navigation/Router.scss';

export const Router: React.FC = props => (
  <BrowserRouter>
    <TopBar />
    <div className="router-wrapper">
      <Switch>
        <Route path={routes.home.base} exact component={Home} />
        <Route path={routes.contact.base} component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);
