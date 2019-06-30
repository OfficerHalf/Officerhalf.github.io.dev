import * as React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  createStyles
} from "@material-ui/core";

import { Frontmatter } from "./Frontmatter";
import { Footer } from "./Footer";
import { BlogPost as IBlogPost } from "../../interfaces/BlogPost";
import { BlogContext } from "../../store/BlogContext";
import { routes } from "../../constants/routes";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3),
      maxWidth: 720
    }
  })
);

export const BlogPost: React.FC<
  RouteComponentProps<{ slug: string }>
> = props => {
  const slug = props.match.params.slug;
  const classes = useStyles();

  const context = React.useContext(BlogContext);
  const foundPost = context.posts.find(p => p.slug === slug);

  if (foundPost === undefined) {
    return <Redirect to={routes.blog.base} />;
  }

  const post: IBlogPost = foundPost!;
  return (
    <Container classes={{ root: classes.root }}>
      <Frontmatter post={post} />
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: post.fields.body }}
      />
      <Footer post={post} />
    </Container>
  );
};
