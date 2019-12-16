import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../constants/routes";
import { App } from "./App";
import { BlogPost } from "../Blog/BlogPost";

export const AppRouter: React.FC = props => {
  return (
    <Switch>
      <Route path={routes.app.base} exact component={App} />
      <Route path={routes.app.blog.post()} component={BlogPost} />
    </Switch>
  );
};
