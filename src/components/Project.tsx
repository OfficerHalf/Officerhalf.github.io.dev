import * as React from 'react';
import { Card } from 'antd';
import '../styles/components/Project.scss';
import { Link } from 'react-router-dom';

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  linkType: 'a' | 'Link';
}

export const Project: React.FC<ProjectProps> = props => {
  return (
    <Card
      className="project"
      title={props.title}
      extra={
        props.linkType === 'a' ? (
          <a
            className="project-more-link"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            More
          </a>
        ) : (
          <Link to={props.link}>More</Link>
        )
      }
      style={{ margin: 8 }}
    >
      <p className="project-description" style={{ margin: 0 }}>
        {props.description}
      </p>
    </Card>
  );
};
