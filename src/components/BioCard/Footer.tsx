import * as React from "react";
import {
  CardActions,
  IconButton,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { GithubCircle, LinkedinBox } from "mdi-material-ui";

import { links } from "../../constants/links";

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
      <IconButton href={links.github} target="_blank" rel="noopener">
        <GithubCircle />
      </IconButton>
      <IconButton href={links.linkedin} target="_blank" rel="noopener">
        <LinkedinBox />
      </IconButton>
      <IconButton href={links.email}>
        <Email />
      </IconButton>
    </CardActions>
  );
};
