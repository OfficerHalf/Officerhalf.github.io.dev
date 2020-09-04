import React from 'react';
import { darkTheme, lightTheme } from '../util/theme';
import { Theme } from '../../types/theme';
import { usePrefersDarkTheme } from '../hooks/usePrefersDarkTheme';

type Context = Theme & {
  dark: boolean;
  setTheme: (theme: 'dark' | 'light') => void;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<Context>({
  ...lightTheme,
  dark: false,
  setTheme: () => {},
  toggleTheme: () => {}
});

let localStorage: Storage | null = null;
let savedTheme: string | null = null;

if (typeof window !== 'undefined') {
  localStorage = window.localStorage;
  savedTheme = window.localStorage.getItem('theme');
}

export const ThemeContextProvider: React.FC = props => {
  const preferDark = usePrefersDarkTheme();
  const [theme, _setTheme] = React.useState<Theme>(
    savedTheme !== null && savedTheme === 'dark'
      ? darkTheme
      : savedTheme !== null && savedTheme === 'light'
      ? lightTheme
      : preferDark
      ? darkTheme
      : lightTheme
  );

  const setTheme = React.useCallback((theme: 'dark' | 'light') => {
    if (theme === 'dark') {
      _setTheme(darkTheme);
      localStorage && localStorage.setItem('theme', 'dark');
    } else {
      _setTheme(lightTheme);
      localStorage && localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    if (theme === darkTheme) {
      localStorage && localStorage.setItem('theme', 'light');
      _setTheme(lightTheme);
    } else {
      _setTheme(darkTheme);
      localStorage && localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const dark = React.useMemo(() => {
    return theme === darkTheme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ ...theme, dark, setTheme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
};
