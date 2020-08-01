import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import '../../normalize.css';
import '../../base.css';
import { ThemeContextProvider } from '../../store/ThemeContext';

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic']);

export const App: React.FC = props => {
  return (
    <Root>
      <HelmetProvider>
        <ThemeContextProvider>
          <Layout>
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </Layout>
        </ThemeContextProvider>
      </HelmetProvider>
    </Root>
  );
};
