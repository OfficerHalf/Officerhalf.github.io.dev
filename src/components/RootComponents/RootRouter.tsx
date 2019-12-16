import * as React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import { routes } from "../../constants/routes";

export const RootRouter: React.FC = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.app.base} component={AppContext} />
      </Switch>
    </BrowserRouter>
  );
};
