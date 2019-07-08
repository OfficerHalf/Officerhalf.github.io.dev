import React from "react";
import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Theme from "./styles/Theme";
import { routes } from "./constants/routes";
import { Home, Blog, Projects, TopBar, Contact } from "./components";
import { BlogProvider } from "./store/BlogContext";
import { ProjectProvider } from "./store/ProjectContext";

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
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
            <ThemeProvider theme={Theme}>
              <div className={classes.wrapper}>
                <TopBar />
                <Switch>
                  <Route exact path={routes.home.base} component={Home} />
                  <Route path={routes.projects.base} component={Projects} />
                  <Route path={routes.blog.base} component={Blog} />
                  <Route path={routes.contact.base} component={Contact} />
                </Switch>
              </div>
            </ThemeProvider>
          </BlogProvider>
        </ProjectProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
