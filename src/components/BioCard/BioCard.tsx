import * as React from "react";
import { Card, makeStyles, createStyles } from "@material-ui/core";

import { Header, CondensedHeader } from "./Header";
import { Body, CondensedBody } from "./Body";
import { Footer } from "./Footer";

interface BioCardProps {
  condensed?: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: 275
    }
  })
);

export const BioCard: React.FC<BioCardProps> = props => {
  const { condensed = false } = props;
  const header = condensed ? <CondensedHeader /> : <Header />;
  const body = condensed ? <CondensedBody /> : <Body />;
  const footer = condensed ? <></> : <Footer />;
  const classes = useStyles();
  return (
    <Card classes={{ root: condensed ? undefined : classes.root }}>
      {header}
      {body}
      {footer}
    </Card>
  );
};
