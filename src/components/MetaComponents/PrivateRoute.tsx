import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RouteComponentProps } from '@reach/router';

type PrivateRouteProps = {
  element: React.ReactElement;
} & RouteComponentProps;

export const PrivateRoute: React.FC<PrivateRouteProps> = props => {
  const { element } = props;
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated) {
    loginWithRedirect();
  }
  return isAuthenticated ? element : undefined;
};
