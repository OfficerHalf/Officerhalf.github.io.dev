import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Private: React.FC = props => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  if (!isAuthenticated && !isLoading) {
    loginWithRedirect({ scope: 'user gist' });
  }
  return <>{isAuthenticated ? props.children : undefined}</>;
};
