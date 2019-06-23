import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { HashRouter, Switch, Route } from "react-router-dom";

import Theme from "./styles/Theme";
import { TopBar } from "./components";
import { routes } from "./constants/routes";
import { Home } from "./views/Home";

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
            </Switch>
          </Container>
        </ThemeProvider>
      </HashRouter>
    </>
  );
};

export default App;
