import * as React from 'react';
import { NonIdealState, Button } from '@blueprintjs/core';
import { routes } from '../../constants/routes';
import { RouteComponentProps, withRouter } from 'react-router';
import '../../styles/components/RootComponents/404.scss';

const FourZeroFourBase: React.FC<RouteComponentProps> = props => (
  <div id="not-found">
    <NonIdealState
      icon="zoom-out"
      title="Not Found"
      description="Something went wrong or there was nothing here to begin with."
      action={
        <Button
          icon="home"
          intent="primary"
          onClick={() => props.history.push(routes.app.home.base)}
        >
          Return Home
        </Button>
      }
    />
  </div>
);

export const FourZeroFour = withRouter(FourZeroFourBase);
