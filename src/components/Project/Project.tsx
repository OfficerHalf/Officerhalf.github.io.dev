import * as React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

interface ProjectInfo {}

interface ProjectProps {
  project: ProjectInfo;
}

export const Project: React.FC<ProjectProps> = props => {
  const {
    title,
    livePreview,
    source,
    technologies,
    myRole,
    challenges,
    solution,
    features
  } = props.project;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
