import * as React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";

import { Theme } from "../styles/Theme";

interface ContextProps {
  topBarHeight: number;
  setTopBarHeight: (height: number) => void;
}

export const ThemeContext = React.createContext<ContextProps>({
  topBarHeight: 48,
  setTopBarHeight: () => {}
});

export const ThemeProvider: React.FC = props => {
  const [topBarHeight, setTopBarHeight] = React.useState<number>(48);
  return (
    <ThemeContext.Provider value={{ topBarHeight, setTopBarHeight }}>
      <MuiThemeProvider theme={Theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;
