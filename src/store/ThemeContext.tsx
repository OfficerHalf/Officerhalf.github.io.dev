import React from 'react';
import { darkTheme, lightTheme } from '../util/theme';
import { NewTheme } from '../../types/theme';
import { usePrefersDarkTheme } from '../hooks/usePrefersDarkTheme';

interface Context {
  dark: boolean;
  theme: NewTheme;
  setTheme: (theme: 'dark' | 'light') => void;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<Context>({
  dark: false,
  theme: lightTheme,
  setTheme: () => {},
  toggleTheme: () => {}
});

let localStorage: Storage | null = null;

if (typeof window !== 'undefined') {
  localStorage = window.localStorage;
}

export const ThemeContextProvider: React.FC = props => {
  const preferDark = usePrefersDarkTheme();
  const savedTheme: string | null = localStorage ? localStorage.getItem('theme') : null;
  const startingTheme =
    savedTheme !== null && savedTheme === 'dark'
      ? darkTheme
      : savedTheme !== null && savedTheme === 'light'
      ? lightTheme
      : preferDark
      ? darkTheme
      : lightTheme;
  const [theme, _setTheme] = React.useState<NewTheme>(startingTheme);

  React.useEffect(() => {
    _setTheme(preferDark ? darkTheme : lightTheme);
  }, [preferDark]);

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

  return <ThemeContext.Provider value={{ dark, setTheme, theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};
