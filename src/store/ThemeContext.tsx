import React from 'react';
import { darkTheme, lightTheme } from '../util/theme';
import { NewTheme } from '../../types/theme';

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
  const [theme, _setTheme] = React.useState<NewTheme>(lightTheme);
  const setTheme = React.useCallback((theme: 'dark' | 'light') => {
    if (theme === 'dark') {
      _setTheme(darkTheme);
    } else {
      _setTheme(lightTheme);
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    if (theme === darkTheme) {
      _setTheme(lightTheme);
    } else {
      _setTheme(darkTheme);
    }
  }, [theme]);

  const dark = React.useMemo(() => {
    return theme === darkTheme;
  }, [theme]);

  return <ThemeContext.Provider value={{ dark, setTheme, theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};
