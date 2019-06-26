import * as React from "react";
import { Container, Grid, makeStyles, createStyles } from "@material-ui/core";

import { BlogContext } from "../store/BlogContext";
import { BlogPostCard } from "./BlogPostCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3)
    }
  })
);

export const Blog: React.FC = props => {
  const context = React.useContext(BlogContext);
  const classes = useStyles();
  return (
    <Container maxWidth="lg" classes={{ root: classes.root }}>
      <Grid container spacing={2}>
        {context.posts.map(post => (
          <Grid item sm>
            <BlogPostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
