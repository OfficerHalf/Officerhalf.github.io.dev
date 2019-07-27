import * as React from 'react';
import { Card } from '@blueprintjs/core';

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export const Project: React.FC<ProjectProps> = props => {
  return (
    <Card className="project-wrapper">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        See more
      </a>
    </Card>
  );
};
