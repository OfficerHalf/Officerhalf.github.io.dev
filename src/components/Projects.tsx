import * as React from "react";
import { Container } from "@material-ui/core";

import { Project } from "./Project";
import { ProjectContext } from "../store/ProjectContext";

export const Projects: React.FC = props => {
  const context = React.useContext(ProjectContext);
  return (
    <Container maxWidth="lg">
      {context.projects.map(project => (
        <Project project={project} key={project.slug} />
      ))}
    </Container>
  );
};
