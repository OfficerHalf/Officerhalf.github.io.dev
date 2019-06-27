import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Theme from "./styles/Theme";
import { routes } from "./constants/routes";
import { Home, Blog, Projects, TopBar } from "./components";
import { BlogProvider } from "./store/BlogContext";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>Nathan Smith</title>
          <meta
            name="description"
            content="Nathan Smith, software developer and amateur jort enthusiast."
          />
        </Helmet>
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
      </BrowserRouter>
    </>
  );
};

export default App;
