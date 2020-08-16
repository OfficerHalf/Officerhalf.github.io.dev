import React from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import '../../normalize.css';
import '../../base.css';
import { ThemeContextProvider } from '../../store/ThemeContext';
import { Randomizer } from '../Pokemon/Randomizer';

// Do not prefetch dynamic routes
addPrefetchExcludes(['pokemon']);

export const App: React.FC = props => {
  return (
    <Root>
      <HelmetProvider>
        <ThemeContextProvider>
          <Layout>
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Randomizer path="/pokemon" />
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </Layout>
        </ThemeContextProvider>
      </HelmetProvider>
    </Root>
  );
};
