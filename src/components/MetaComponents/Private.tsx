import { FirebaseAuthConsumer, IfFirebaseUnAuthed, IfFirebaseAuthed } from '@react-firebase/auth';
import React from 'react';
import firebase from 'firebase';

export const Private: React.FC = props => {
  const githubProvider = React.useRef(new firebase.auth.GithubAuthProvider());
  const signIn = React.useCallback(async () => {
    githubProvider.current.addScope('gist');
    const result = await firebase.auth().signInWithRedirect(githubProvider.current);
    console.log(result);
  }, []);

  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        if (isSignedIn) {
          firebase
            .auth()
            .getRedirectResult()
            .then(result => {
              console.log(result);
            });
        }
        return isSignedIn ? props.children : <button onClick={signIn}>sign in</button>;
      }}
    </FirebaseAuthConsumer>
  );
  // if (!isAuthenticated && !isLoading) {
  //   loginWithRedirect({ scope: 'user gist' });
  // }
  // return <>{isAuthenticated ? props.children : undefined}</>;
};
