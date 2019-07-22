import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { App } from '../RootComponents/App';
import { DndTools } from '../RootComponents/DndTools';

export const Router: React.FC = props => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.dndTools.root} component={DndTools} />
      <Route path={routes.app.root} component={App} />
    </Switch>
  </BrowserRouter>
);
