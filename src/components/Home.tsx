import * as React from "react";
import { Container, Grid, makeStyles, createStyles } from "@material-ui/core";

import { BioCard } from "./BioCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3)
    }
  })
);

export const Home: React.FC = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm>
          <BioCard condensed />
        </Grid>
        <Grid item sm>
          <BioCard />
        </Grid>
        <Grid item sm>
          <BioCard condensed />
        </Grid>
        <Grid item sm>
          <BioCard condensed />
        </Grid>
      </Grid>
    </Container>
  );
};
