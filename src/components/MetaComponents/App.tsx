import React from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import '../../normalize.css';
import '../../base.css';
import { ThemeContextProvider } from '../../store/ThemeContext';
import { Pokemon } from '../RootComponents/Pokemon';
import { Auth0Provider } from '@auth0/auth0-react';

// Do not prefetch dynamic routes
addPrefetchExcludes(['pokemon']);

const authConstants = {
  domain: 'officerhalf.us.auth0.com',
  clientId: '1WfQDQheEeHNIlsbqd0ilZXmQ3XCTkVo'
};

export const App: React.FC = props => {
  return (
    <Root>
      <Auth0Provider
        domain={authConstants.domain}
        clientId={authConstants.clientId}
        redirectUri={window.location.origin}>
        <HelmetProvider>
          <ThemeContextProvider>
            <Layout>
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Pokemon path="/pokemon" />
                  <Routes path="*" />
                </Router>
              </React.Suspense>
            </Layout>
          </ThemeContextProvider>
        </HelmetProvider>
      </Auth0Provider>
    </Root>
  );
};
