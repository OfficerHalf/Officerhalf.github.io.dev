import * as React from "react";
import {
  Container,
  makeStyles,
  createStyles,
  CircularProgress
} from "@material-ui/core";

import { contactForm } from "../constants/strings";
import { ThemeContext } from "../store/ThemeContext";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3),
      display: "flex",
      justifyContent: "center"
    },
    frame: {
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
  const frameRef = React.createRef<HTMLIFrameElement>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const classes = useStyles();
  const themeContext = React.useContext(ThemeContext);
  return (
    <Container
      maxWidth="lg"
      classes={{ root: classes.root }}
      style={{ minHeight: `calc(100vh - ${themeContext.topBarHeight}px)` }}
    >
      {isLoading && <CircularProgress classes={{ root: classes.spinner }} />}
      <iframe
        id="contact-frame"
        ref={frameRef}
        title="Contact Me Form"
        className={`${classes.frame} ${isLoading ? classes.hidden : ""}`}
        onLoad={e => {
          setIsLoading(false);
        }}
        src={contactForm}
      >
        Loading...
      </iframe>
    </Container>
  );
};
