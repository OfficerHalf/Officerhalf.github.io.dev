import React from 'react';

interface Context {
  token: string;
  setToken: (value: string) => void;
}

export const GithubTokenContext = React.createContext<Context>({ token: '', setToken: () => {} });

export const GithubTokenContextProvider: React.FC = props => {
  const [token, setToken] = React.useState<string>('');
  return <GithubTokenContext.Provider value={{ token, setToken }}>{props.children}</GithubTokenContext.Provider>;
};
