import * as React from "react";
import { Card, makeStyles, createStyles } from "@material-ui/core";

import { Header, CondensedHeader } from "./Header";
import { Body, CondensedBody } from "./Body";
import { Footer } from "./Footer";

interface BioCardProps {
  condensed?: boolean;
  flat?: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: 275
    },
    flat: {
      boxShadow: "none"
    }
  })
);

export const BioCard: React.FC<BioCardProps> = props => {
  const { condensed = false, flat = false } = props;
  const header = condensed ? <CondensedHeader /> : <Header />;
  const body = condensed ? <CondensedBody /> : <Body />;
  const footer = condensed ? <></> : <Footer />;
  const classes = useStyles();
  const rootClasses = `${condensed ? "" : classes.root} ${
    flat ? classes.flat : ""
  }`;
  return (
    <Card classes={{ root: rootClasses }}>
      {header}
      {body}
      {footer}
    </Card>
  );
};
