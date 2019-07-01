import * as React from "react";
import { IconButton, makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";
import { RouteComponentProps, withRouter } from "react-router";
import { routes } from "../constants/routes";

const useStyles = makeStyles(theme => ({
  root: {
    flexShrink: 1
  },
  appBar: {
    flexDirection: "row"
  },
  tabs: {
    flexGrow: 1
  }
}));

const TopBarComponent: React.FC<RouteComponentProps> = props => {
  const classes = useStyles();

  function handleChange(event: React.ChangeEvent<{}>, value: string) {
    props.history.push(value);
  }

  function getTab(): string {
    const path = props.location.pathname;
    if (path.startsWith(routes.projects.base)) {
      return routes.projects.base;
    } else if (path.startsWith(routes.blog.base)) {
      return routes.blog.base;
    } else if (path.startsWith(routes.contact.base)) {
      return routes.contact.base;
    } else {
      return routes.home.base;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={getTab()}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="secondary"
        >
          <Tab label="Home" value={routes.home.base} />
          <Tab label="Projects" value={routes.projects.base} />
          <Tab label="Blog" value={routes.blog.base} />
          <Tab label="Contact" value={routes.contact.base} />
        </Tabs>
        <IconButton color="inherit">
          <GithubCircle />
        </IconButton>
        <IconButton color="inherit">
          <LinkedinBox />
        </IconButton>
      </AppBar>
    </div>
  );
};

export const TopBar = withRouter(TopBarComponent);
