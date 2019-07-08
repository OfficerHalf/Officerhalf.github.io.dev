import * as React from "react";
import { IconButton, makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";
import { RouteComponentProps, withRouter } from "react-router";
import { routes } from "../constants/routes";
import { ThemeContext } from "../store/ThemeContext";

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
  const themeContext = React.useContext(ThemeContext);
  const barRef = React.createRef<HTMLDivElement>();
  const classes = useStyles();

  React.useEffect(() => {
    if (
      barRef.current !== null &&
      themeContext.topBarHeight !== barRef.current.scrollHeight
    ) {
      themeContext.setTopBarHeight(barRef.current.scrollHeight);
    }
  }, [barRef.current]);

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
    <div className={classes.root} ref={barRef}>
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
