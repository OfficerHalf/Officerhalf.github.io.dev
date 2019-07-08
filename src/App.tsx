import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import { routes } from "./constants/routes";
import { Home, Blog, Projects, TopBar, Contact } from "./components";
import { BlogProvider } from "./store/BlogContext";
import { ProjectProvider } from "./store/ProjectContext";
import { ThemeProvider } from "./store/ThemeContext";

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
        <ProjectProvider>
          <BlogProvider>
            <ThemeProvider>
              <TopBar />
              <Switch>
                <Route exact path={routes.home.base} component={Home} />
                <Route path={routes.projects.base} component={Projects} />
                <Route path={routes.blog.base} component={Blog} />
                <Route path={routes.contact.base} component={Contact} />
              </Switch>
            </ThemeProvider>
          </BlogProvider>
        </ProjectProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
