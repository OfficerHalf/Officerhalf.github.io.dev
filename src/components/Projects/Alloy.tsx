import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageHeader } from 'antd';

const Alloy: React.FC<RouteComponentProps> = props => {
  return (
    <>
      <PageHeader onBack={() => props.history.goBack()} title="Alloy" />
    </>
  );
};

const RoutedAlloy = withRouter(Alloy);
export { RoutedAlloy as Alloy };
