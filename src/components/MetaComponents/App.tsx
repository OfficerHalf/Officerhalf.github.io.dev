import React from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import '../../normalize.css';
import '../../base.css';
import { ThemeContextProvider } from '../../store/ThemeContext';
import { Pokemon } from '../RootComponents/Pokemon';
import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';

// Do not prefetch dynamic routes
addPrefetchExcludes(['pokemon']);

const config = {
  apiKey: 'AIzaSyAIDL1KUZXISaFjqF3Dq1HfH50CVexhb2o',
  authDomain: 'poke-randomizer.firebaseapp.com',
  databaseURL: 'https://poke-randomizer.firebaseio.com',
  projectId: 'poke-randomizer',
  storageBucket: 'poke-randomizer.appspot.com',
  messagingSenderId: '276127784869',
  appId: '1:276127784869:web:e29e8925c191d22289d24c'
};

export const App: React.FC = props => {
  return (
    <Root>
      <FirebaseAuthProvider firebase={firebase} {...config}>
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
      </FirebaseAuthProvider>
    </Root>
  );
};
