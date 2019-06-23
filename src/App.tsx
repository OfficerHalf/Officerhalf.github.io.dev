import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { HashRouter, Switch, Route } from "react-router-dom";

import Theme from "./styles/Theme";
import { TopBar } from "./components";
import { routes } from "./constants/routes";
import { Home, Blog, Projects } from "./views";

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <CssBaseline />
        <ThemeProvider theme={Theme}>
          <Container maxWidth="lg">
            <TopBar />
            <Switch>
              <Route exact path={routes.home.base} component={Home} />
              <Route path={routes.projects.base} component={Projects} />
              <Route path={routes.blog.base} component={Blog} />
            </Switch>
          </Container>
        </ThemeProvider>
      </HashRouter>
    </>
  );
};

export default App;
