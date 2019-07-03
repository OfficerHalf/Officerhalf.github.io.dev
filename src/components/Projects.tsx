import * as React from "react";
import { Container } from "@material-ui/core";

import { Project } from "./Project";

export const Projects: React.FC = props => (
  <Container maxWidth="lg">
    <Project
      project={{ title: "Project 1", features: "", technologies: [""] }}
    />
  </Container>
);
