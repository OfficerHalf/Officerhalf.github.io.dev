import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import { Button } from '../Common/Button';
import { GithubTokenContext } from '../../store/GithubTokenContext';
import { Progress } from '../Common/Progress';

const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.addScope('gist');

export const Private: React.FC = props => {
  const [user, loading] = useAuthState(firebase.auth());
  const { setToken } = React.useContext(GithubTokenContext);

  const signIn = React.useCallback(async () => {
    const result = await firebase.auth().signInWithPopup(githubProvider);
    const token: string = (result.credential as any).accessToken;
    setToken(token);
  }, [setToken]);

  return <>{loading ? <Progress /> : user ? props.children : <Button onClick={signIn}>Log In</Button>}</>;
};
