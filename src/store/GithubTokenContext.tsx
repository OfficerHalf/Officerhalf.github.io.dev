import React from 'react';

interface Context {
  token: string;
  setToken: (value: string) => void;
}

const existingToken = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('githubToken') : '';

export const GithubTokenContext = React.createContext<Context>({ token: '', setToken: () => {} });

export const GithubTokenContextProvider: React.FC = props => {
  const [token, setToken] = React.useState<string>(existingToken || '');
  const _setToken = React.useCallback((token: string) => {
    setToken(token);
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('githubToken', token);
    }
  }, []);
  return (
    <GithubTokenContext.Provider value={{ token, setToken: _setToken }}>{props.children}</GithubTokenContext.Provider>
  );
};
