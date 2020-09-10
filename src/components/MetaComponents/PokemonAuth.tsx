import React from 'react';
import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { GithubTokenContextProvider } from '../../store/GithubTokenContext';
import { useSiteData } from 'react-static';
import { SiteData } from '../../../types/static';

export const PokemonAuth: React.FC = props => {
  const { pokemonFirebaseConfig: config } = useSiteData<SiteData>();
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <GithubTokenContextProvider>{props.children}</GithubTokenContextProvider>
    </FirebaseAuthProvider>
  );
};
