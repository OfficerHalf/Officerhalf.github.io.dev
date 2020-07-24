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

export const ThemeContextProvider: React.FC = props => {
  const preferDark = usePrefersDarkTheme();
  const savedTheme = window.localStorage.getItem('theme');
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
      window.localStorage.setItem('theme', 'dark');
    } else {
      _setTheme(lightTheme);
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    if (theme === darkTheme) {
      window.localStorage.setItem('theme', 'light');
      _setTheme(lightTheme);
    } else {
      _setTheme(darkTheme);
      window.localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const dark = React.useMemo(() => {
    return theme === darkTheme;
  }, [theme]);

  return <ThemeContext.Provider value={{ dark, setTheme, theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};
