import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Container, Grid, createStyles, makeStyles } from "@material-ui/core";

import { BlogContext } from "../../store/BlogContext";
import { BlogPostCard } from "../BlogPostCard";
import { routes } from "../../constants/routes";

enum PostGridMode {
  All,
  Category,
  Tag
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3)
    }
  })
);

interface PostGridParams {
  cat: string;
  tag: string;
}

const PostGridBase: React.FC<RouteComponentProps<PostGridParams>> = props => {
  const { location, match } = props;
  const classes = useStyles();
  const context = React.useContext(BlogContext);
  const mode: PostGridMode =
    location.pathname === routes.blog.base
      ? PostGridMode.All
      : location.pathname.startsWith(routes.blog.category.base)
      ? PostGridMode.Category
      : PostGridMode.Tag;
  return (
    <Container maxWidth="lg" classes={{ root: classes.root }}>
      <Grid container spacing={2}>
        {context.posts.map(post => {
          const tags = post.fields.tags.map(tag => tag.tag);
          if (
            mode === PostGridMode.All ||
            (mode === PostGridMode.Category &&
              post.fields.category.category === match.params.cat) ||
            (mode === PostGridMode.Tag && tags.indexOf(match.params.tag) !== -1)
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
