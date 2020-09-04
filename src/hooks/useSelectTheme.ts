import React from 'react';
import { Theme } from 'react-select';
import { ThemeConfig } from 'react-select/src/theme';
import { ThemeContext } from '../store/ThemeContext';

export function useSelectTheme(): ThemeConfig {
  const theme = React.useContext(ThemeContext);
  const buildTheme = React.useCallback(
    (selectTheme: Theme) => {
      const newTheme = { ...selectTheme };
      newTheme.colors['primary'] = theme.primary.darker;
      newTheme.colors['primary75'] = theme.primary.main;
      newTheme.colors['primary50'] = theme.primary.main;
      newTheme.colors['primary25'] = theme.primary.lighter;
      if (theme.dark) {
        newTheme.colors['neutral0'] = theme.background.background20; // background of the field
        newTheme.colors['neutral5'] = theme.background.background20;
        newTheme.colors['neutral10'] = theme.background.background20;
        newTheme.colors['neutral20'] = theme.background.background40; // dropdown arrow / separator / border
        newTheme.colors['neutral30'] = theme.background.background60; // hover border
        newTheme.colors['neutral40'] = theme.textColor.accentText; // no options text
        newTheme.colors['neutral50'] = theme.textColor.disabledText; // field placeholder text
        newTheme.colors['neutral60'] = theme.background.background70; // used on the border
        newTheme.colors['neutral70'] = theme.background.background70;
        newTheme.colors['neutral80'] = theme.textColor.primaryText; // Text color in the field
        newTheme.colors['neutral90'] = theme.background.background80;
      }
      return newTheme;
    },
    [
      theme.background.background20,
      theme.background.background40,
      theme.background.background60,
      theme.background.background70,
      theme.background.background80,
      theme.dark,
      theme.primary.darker,
      theme.primary.lighter,
      theme.primary.main,
      theme.textColor.accentText,
      theme.textColor.disabledText,
      theme.textColor.primaryText
    ]
  );
  return buildTheme;
}
