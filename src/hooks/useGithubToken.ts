import React from 'react';
import firebase from 'firebase';
import { GithubTokenContext } from '../store/GithubTokenContext';

const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.addScope('gist');

export function useGithubToken() {
  const { token, setToken } = React.useContext(GithubTokenContext);

  const getToken = React.useCallback(async () => {
    if (token === '') {
      const result = await firebase.auth().signInWithPopup(githubProvider);
      console.log(result);
      const newToken: string = (result.credential as any).accessToken;
      setToken(newToken);
      return newToken;
    } else {
      return Promise.resolve(token);
    }
  }, [setToken, token]);

  return getToken;
}
