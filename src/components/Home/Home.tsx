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
import { BlogPostCard } from "../BlogPostCard";
import { BlogContext } from "../../store/BlogContext";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3),
      flexGrow: 1,
      height: "100%"
    }
  })
);

export const Home: React.FC = props => {
  const classes = useStyles();
  const theme = useTheme();
  const condensed = useMediaQuery(theme.breakpoints.down("xs"));
  const blogContext = React.useContext(BlogContext);
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm>
          <BioCard condensed={condensed} flat />
        </Grid>
        <Grid item container sm>
          {blogContext.posts.map(post => (
            <BlogPostCard post={post} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
