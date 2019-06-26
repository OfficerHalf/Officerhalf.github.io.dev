import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  makeStyles,
  createStyles,
  Typography
} from "@material-ui/core";
import moment from "moment";

import { BlogPost } from "../../interfaces/BlogPost";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      display: "flex",
      minHeight: 200
    },
    cardContent: {
      flexGrow: 1
    },
    media: {
      maxWidth: 200
    }
  })
);

export const BlogPostCard: React.FC<BlogPostCardProps> = props => {
  const { post, featured = false } = props;
  const classes = useStyles();
  return (
    <CardActionArea>
      <Card classes={{ root: classes.card }}>
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography component="h3" variant="subtitle1" color="textSecondary">
            {moment(post.published).format("MMM D, YYYY")}
          </Typography>
          <Typography>{post.summary}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          src={post.featured_image}
          classes={{ root: classes.media }}
        />
      </Card>
    </CardActionArea>
  );
};
