import * as React from 'react';
import { Card } from 'antd';
import '../styles/components/Project.scss';

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

export const Project: React.FC<ProjectProps> = props => {
  return (
    <Card
      className="project"
      title={props.title}
      extra={
        <a
          className="project-more-link"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      }
      style={{ margin: 8 }}
    >
      <p className="project-description" style={{ margin: 0 }}>
        {props.description}
      </p>
    </Card>
  );
};
