import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  createStyles,
  Box
} from "@material-ui/core";
import moment from "moment";

import { BlogPost as IBlogPost } from "../../interfaces/BlogPost";
import { BlogContext } from "../../store/BlogContext";
import { routes } from "../../constants/routes";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3)
    },
    media: {
      width: "100%",
      height: "100%",
      marginBottom: "0.35em"
    },
    body: {
      marginBottom: theme.spacing(3)
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
    props.history.push(routes.blog.base);
    return null;
  }

  const post: IBlogPost = foundPost!;
  return (
    <Container maxWidth="md" classes={{ root: classes.root }}>
      {post.fields.header_image !== "" && (
        <Box>
          <img className={classes.media} src={post.fields.header_image} />
        </Box>
      )}
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {post.fields.title}
      </Typography>
      {post.fields.subtitle !== "" && (
        <Typography
          variant="h5"
          component="h2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          {post.fields.subtitle}
        </Typography>
      )}
      <Typography classes={{ root: classes.body }}>
        <div dangerouslySetInnerHTML={{ __html: post.fields.body }} />
      </Typography>
      <Typography
        variant="subtitle1"
        align="right"
        color="textSecondary"
      >{`Nathan Smith - ${moment(post.fields.publish_date).format(
        "MMM D, YYYY"
      )}`}</Typography>
    </Container>
  );
};
