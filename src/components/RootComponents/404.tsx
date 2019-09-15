import * as React from 'react';
import { routes } from '../../constants/routes';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Empty, Button } from 'antd';
import '../../styles/components/RootComponents/404.scss';

const FourZeroFourBase: React.FC<RouteComponentProps> = props => (
  <div id="not-found">
    <Empty
      description={<span>Something went wrong or there is nothing here.</span>}
    >
      <Link to={routes.app.home.base}>
        <Button type="primary">Return Home</Button>
      </Link>
    </Empty>
  </div>
);

export const FourZeroFour = withRouter(FourZeroFourBase);
