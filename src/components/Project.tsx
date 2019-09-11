import * as React from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export const Project: React.FC<ProjectProps> = props => {
  return (
    <div className="project">
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <a
        className="project-more-link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        See more
      </a>
    </div>
  );
};
