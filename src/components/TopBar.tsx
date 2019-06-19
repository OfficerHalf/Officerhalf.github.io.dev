import * as React from "react";
import {
  Toolbar,
  IconButton,
  makeStyles,
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";
import { Email } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    flexDirection: "row"
  },
  tabs: {
    flexGrow: 1
  }
}));

export const TopBar: React.FC = props => {
  const classes = useStyles();
  const [tab, setTab] = React.useState<number>(0);

  function handleChange(event: React.ChangeEvent<{}>, value: number) {
    setTab(value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={tab}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="secondary"
        >
          <Tab label="Home" />
          <Tab label="Projects" />
          <Tab label="Blog" />
        </Tabs>
        <IconButton color="inherit">
          <GithubCircle />
        </IconButton>
        <IconButton color="inherit">
          <LinkedinBox />
        </IconButton>
        <IconButton color="inherit">
          <Email />
        </IconButton>
      </AppBar>
    </div>
  );
};
