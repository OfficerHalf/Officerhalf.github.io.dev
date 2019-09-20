import * as React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import '../../styles/components/Project.scss';

export const AlloyCard: React.FC = props => {
  return (
    <Card
      className="project"
      title="Alloy"
      extra={
        <Link className="project-more-link" to={routes.app.project.alloy.base}>
          More
        </Link>
      }
      style={{ margin: 8 }}
    >
      <p className="project-description" style={{ margin: 0 }}>
        A more monochromatic, desaturated Monokai theme for Visual Studio Code,
        PrismJS, and Conemu.
      </p>
    </Card>
  );
};
