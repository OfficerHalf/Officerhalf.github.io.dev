import * as React from "react";
import {
  Container,
  Typography,
  makeStyles,
  createStyles,
  Link
} from "@material-ui/core";

import { Project as ProjectInfo } from "../../interfaces/Project";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    },
    afterTitle: {
      display: "flex",
      flexDirection: "row"
    },
    column: {
      display: "flex",
      flexDirection: "column"
    }
  })
);

interface ProjectProps {
  project: ProjectInfo;
}

export const Project: React.FC<ProjectProps> = props => {
  const classes = useStyles();
  const {
    challenges,
    features,
    icon,
    live_link,
    my_role,
    preview_image,
    solution,
    source_link,
    summary,
    technologies,
    title
  } = props.project.fields;
  return (
    <Container maxWidth="sm" classes={{ root: classes.root }}>
      <Typography variant="h6" component="h3">
        {title}
      </Typography>
      <div className={classes.afterTitle}>
        <div className={classes.column}>
          <img src={preview_image} alt="" />
          <span>
            <Link href={live_link}>Live</Link>
            <Link href={source_link}>Source</Link>
          </span>
        </div>
        <div className={classes.column}>
          <div dangerouslySetInnerHTML={{ __html: my_role || summary || "" }} />
          <div dangerouslySetInnerHTML={{ __html: challenges || "" }} />
          <div dangerouslySetInnerHTML={{ __html: solution || "" }} />
          <div dangerouslySetInnerHTML={{ __html: features || "" }} />
        </div>
      </div>
    </Container>
  );
};
