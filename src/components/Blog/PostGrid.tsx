import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Container, Grid, createStyles, makeStyles } from "@material-ui/core";

import { BlogContext } from "../../store/BlogContext";
import { BlogPostCard } from "../BlogPostCard";
import { routes } from "../../constants/routes";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3)
    }
  })
);

const PostGridBase: React.FC<RouteComponentProps<{ cat?: string }>> = props => {
  const classes = useStyles();
  const context = React.useContext(BlogContext);
  return (
    <Container maxWidth="lg" classes={{ root: classes.root }}>
      <Grid container spacing={2}>
        {context.posts.map(post => {
          if (
            props.location.pathname === routes.blog.base ||
            (props.location.pathname.startsWith(routes.blog.category.base) &&
              props.match.params.cat !== undefined &&
              props.match.params.cat === post.fields.category.category)
          ) {
            return (
              <Grid item sm key={`card-${post.slug}`}>
                <BlogPostCard post={post} />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </Container>
  );
};

export const PostGrid = withRouter(PostGridBase);
