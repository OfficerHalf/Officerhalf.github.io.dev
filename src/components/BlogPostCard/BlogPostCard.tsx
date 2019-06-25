import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  makeStyles,
  createStyles
} from "@material-ui/core";

import { BlogPost } from "../../interfaces/BlogPost";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    media: {
      maxHeight: 400,
      maxWidth: 600
    }
  })
);

export const BlogPostCard: React.FC<BlogPostCardProps> = props => {
  const { post, featured = false } = props;
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        component="img"
        src={post.featured_image}
        classes={{ root: classes.media }}
      />
      <CardContent>{post.summary}</CardContent>
    </Card>
  );
};
