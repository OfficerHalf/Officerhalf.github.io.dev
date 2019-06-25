import * as React from "react";
import { Container, Grid } from "@material-ui/core";

import { BlogContext } from "../store/BlogContext";
import { BlogPostCard } from "./BlogPostCard";

export const Blog: React.FC = props => {
  const context = React.useContext(BlogContext);
  return (
    <Container maxWidth="lg">
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
