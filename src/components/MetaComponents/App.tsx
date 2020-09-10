import React, { Suspense } from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import '../../normalize.css';
import '../../base.css';
import { ThemeContextProvider } from '../../store/ThemeContext';
import { Pokemon } from '../RootComponents/Pokemon';
import { PokemonAuth } from './PokemonAuth';

// Do not prefetch dynamic routes
addPrefetchExcludes(['pokemon']);

export const App: React.FC = props => {
  return (
    <Root>
      <Suspense fallback={''}>
        <PokemonAuth>
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
        </PokemonAuth>
      </Suspense>
    </Root>
  );
};
