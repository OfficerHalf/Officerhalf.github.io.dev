import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  makeStyles,
  createStyles,
  Box,
  Link,
  Avatar,
  CardHeader
} from "@material-ui/core";
import moment from "moment";

import { BlogPost } from "../../interfaces/BlogPost";
import { routes } from "../../constants/routes";
import { bioImage } from "../../constants/strings";

const useStyles = makeStyles(theme =>
  createStyles({
    header: {
      margin: theme.spacing(2, 0),
      padding: 0
    },
    media: {
      width: "100%",
      height: "100%",
      marginTop: "0.35em",
      marginBottom: "0.35em"
    }
  })
);

interface FrontmatterProps {
  post: BlogPost;
}

export const Frontmatter: React.FC<FrontmatterProps> = props => {
  const { post } = props;
  const classes = useStyles();

  return (
    <>
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
      <CardHeader
        avatar={<Avatar src={bioImage}>NS</Avatar>}
        title="Nathan Smith"
        subheader={moment(post.fields.publish_date).format("MMM D, YYYY")}
        classes={{ root: classes.header }}
      />
      {post.fields.header_image !== "" && (
        <Box>
          <img
            className={classes.media}
            src={post.fields.header_image}
            alt={post.fields.header_image_alt}
          />
        </Box>
      )}
    </>
  );
};
