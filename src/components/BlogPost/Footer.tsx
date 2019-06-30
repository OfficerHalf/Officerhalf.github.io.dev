import * as React from "react";
import { Chip, makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { BlogPost } from "../../interfaces/BlogPost";
import { routes } from "../../constants/routes";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap"
    },
    tag: {
      marginRight: theme.spacing(1)
    }
  })
);

interface FooterProps {
  post: BlogPost;
}

export const Footer: React.FC<FooterProps> = props => {
  const { post } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {post.fields.tags.map(tag => (
        <Chip
          classes={{ root: classes.tag }}
          component={Link}
          to={routes.blog.tag.value(tag.tag)}
          clickable
          label={tag.tag}
        />
      ))}
    </div>
  );
};
