import * as React from "react";
import {
  Container,
  Grid,
  makeStyles,
  createStyles,
  useMediaQuery
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { BioCard } from "../BioCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3)
    }
  })
);

export const Home: React.FC = props => {
  const classes = useStyles();
  const theme = useTheme();
  const condensed = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm>
          <BioCard condensed={condensed} flat />
        </Grid>
      </Grid>
    </Container>
  );
};
