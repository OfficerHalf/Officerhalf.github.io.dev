import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { HashRouter, Switch, Route } from "react-router-dom";

import Theme from "./styles/Theme";
import { routes } from "./constants/routes";
import { Home, Blog, Projects, TopBar } from "./components";
import { BlogProvider } from "./store/BlogContext";

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <CssBaseline />
        <BlogProvider>
          <ThemeProvider theme={Theme}>
            <TopBar />
            <Switch>
              <Route exact path={routes.home.base} component={Home} />
              <Route path={routes.projects.base} component={Projects} />
              <Route path={routes.blog.base} component={Blog} />
            </Switch>
          </ThemeProvider>
        </BlogProvider>
      </HashRouter>
    </>
  );
};

export default App;
