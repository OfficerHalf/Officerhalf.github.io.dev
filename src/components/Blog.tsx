import * as React from "react";
import { Container, Grid, makeStyles, createStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import { routes } from "../constants/routes";
import { BlogContext } from "../store/BlogContext";
import { BlogPostCard } from "./BlogPostCard";
import { BlogPost } from "./BlogPost";

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
    <Switch>
      <Route exact path={routes.blog.base}>
        <>
          <Helmet>
            <title>Nathan Smith - Blog</title>
            <meta
              name="description"
              content="Nathan's blog is where he occasionally puts words about life, software, and Dungeons and Dragons."
            />
          </Helmet>
          <Container maxWidth="lg" classes={{ root: classes.root }}>
            <Grid container spacing={2}>
              {context.posts.map(post => (
                <Grid item sm>
                  <BlogPostCard post={post} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      </Route>
      <Route path={routes.blog.post.template} component={BlogPost} />
    </Switch>
  );
};
