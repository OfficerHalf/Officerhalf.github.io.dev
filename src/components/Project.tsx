import * as React from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export const Project: React.FC<ProjectProps> = props => {
  return (
    <div className="project-wrapper">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank">
        See more
      </a>
    </div>
  );
};
