import * as React from "react";
import {
  CardActions,
  IconButton,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";

const useStyles = makeStyles(theme =>
  createStyles({
    actions: {
      justifyContent: "flex-end"
    }
  })
);

export const Footer: React.FC = props => {
  const classes = useStyles();
  return (
    <CardActions className={classes.actions}>
      <IconButton>
        <GithubCircle />
      </IconButton>
      <IconButton>
        <LinkedinBox />
      </IconButton>
      <IconButton>
        <Email />
      </IconButton>
    </CardActions>
  );
};
