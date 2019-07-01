import * as React from "react";
import {
  Container,
  makeStyles,
  createStyles,
  CircularProgress
} from "@material-ui/core";

import { contactForm } from "../constants/strings";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3),
      flexGrow: 1,
      display: "flex",
      justifyContent: "center"
    },
    frame: {
      display: "block",
      height: "100%",
      width: "100%",
      border: 0
    },
    spinner: {
      marginTop: 100
    },
    hidden: {
      display: "none"
    }
  })
);

export const Contact: React.FC = props => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const classes = useStyles();
  return (
    <Container maxWidth="lg" classes={{ root: classes.root }}>
      {isLoading && <CircularProgress classes={{ root: classes.spinner }} />}
      <iframe
        title="Contact Me Form"
        className={`${classes.frame} ${isLoading ? classes.hidden : ""}`}
        onLoad={() => setIsLoading(false)}
        src={contactForm}
      >
        Loading...
      </iframe>
    </Container>
  );
};
