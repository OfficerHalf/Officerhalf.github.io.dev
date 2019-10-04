import * as React from 'react';
import { WorkLayout } from '../Common/WorkLayout';
import { work } from '../../constants/projects';
import { routes } from '../../constants/routes';

export const UserManagement: React.FC = props => {
  const project = React.useMemo(() => {
    const index = work.findIndex(
      proj => proj.cardProps.link === routes.app.project.userManagement.base
    );
    return work[index];
  }, [work, routes.app.project.userManagement.base]);
  return <WorkLayout {...project} />;
};
