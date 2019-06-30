import * as React from "react";
import { RouteComponentProps, Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  createStyles,
  Box,
  Link
} from "@material-ui/core";
import moment from "moment";

import { BlogPost as IBlogPost } from "../../interfaces/BlogPost";
import { BlogContext } from "../../store/BlogContext";
import { routes } from "../../constants/routes";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 3),
      maxWidth: 720
    },
    media: {
      width: "100%",
      height: "100%",
      marginTop: "0.35em",
      marginBottom: "0.35em"
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
    <Container classes={{ root: classes.root }}>
      <Typography
        variant="h6"
        component="h3"
        color="textSecondary"
        gutterBottom
      >
        <Link
          component={RouterLink}
          to={routes.blog.category.value(post.fields.category.category)}
        >
          {post.fields.category.category}
        </Link>
      </Typography>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom={post.fields.subtitle === ""}
      >
        {post.fields.title}
      </Typography>
      {post.fields.subtitle !== "" && (
        <Typography
          variant="h5"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          {post.fields.subtitle}
        </Typography>
      )}
      {post.fields.header_image !== "" && (
        <Box>
          <img
            className={classes.media}
            src={post.fields.header_image}
            alt={post.fields.header_image_alt}
          />
        </Box>
      )}
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: post.fields.body }}
      />
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
