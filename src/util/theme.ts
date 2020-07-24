import { ColorTheme, TypographyTheme, NewThemeStatic, Theme } from '../../types/theme';
import color from 'color';

// Colors
// Light Theme Text
const darkText = '#000000';
const darkPrimaryText = color(darkText).alpha(0.87).hex();
const darkAccentText = color(darkPrimaryText).alpha(0.54).hex();
const darkDisabledText = color(darkPrimaryText).alpha(0.38).hex();

// Dark Theme Text
const lightText = '#ffffff';
const lightPrimaryText = lightText;
const lightAccentText = color(lightPrimaryText).alpha(0.7).hex();
const lightDisabledText = color(lightPrimaryText).alpha(0.5).hex();

// Light Theme Background
const lightBackground = '#fafafa';
const lightBackground0 = color(lightBackground).lighten(0.05).hex();
const lightBackground5 = color(lightBackground).darken(0.05).hex();
const lightBackground10 = color(lightBackground).darken(0.1).hex();
const lightBackground20 = color(lightBackground).darken(0.2).hex();
const lightBackground30 = color(lightBackground).darken(0.3).hex();

// Dark Theme Background
const darkBackground = '#2c2c2c';
const darkBackground0 = color(darkBackground).darken(0.05).hex();
const darkBackground5 = color(darkBackground).lighten(0.05).hex();
const darkBackground10 = color(darkBackground).lighten(0.2).hex();
const darkBackground20 = color(darkBackground).lighten(0.3).hex();
const darkBackground30 = color(darkBackground).lighten(0.4).hex();

// Primary Color
const primaryMain = '#377771';
const primaryMainContrast = lightPrimaryText;
const primaryLighter = color(primaryMain).lighten(0.6).desaturate(0.2).hex();
const primaryLighterContrast = darkPrimaryText;
const primaryDarker = '#235a54';
const primaryDarkerContrast = darkPrimaryText;

// Accent Color
const accentMain = '#4ce0b3';
const accentMainContrast = darkPrimaryText;
const accentLighter = '#c9f6e8';
const accentLighterContrast = darkPrimaryText;
const accentDarker = '#33d39a';
const accentDarkerContrast = darkPrimaryText;

const baseLineHeight = 1.61;

const space = {
  xxs: '2px',
  xs: '4px',
  s: '8px',
  sm: '12px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '64px',
  xxxl: '96px'
};

const queries = {
  '5': '(min-width: 576px)',
  '7': '(min-width: 768px)',
  '9': '(min-width: 992px)',
  '12': '(min-width: 1200px)'
};

const elevationTheme = {
  '0': 'none',
  '1': `0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 2px 1px -1px rgba(0, 0, 0, 0.12)`,
  '2': `0px 1px 5px 0px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
  0px 3px 1px -2px rgba(0, 0, 0, 0.12)`,
  '3': `0px 1px 8px 0px rgba(0, 0, 0, 0.2),
  0px 3px 4px 0px rgba(0, 0, 0, 0.14),
  0px 3px 3px -2px rgba(0, 0, 0, 0.12)`,
  '4': `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14),
  0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
  '5': `0px 3px 5px -1px rgba(0, 0, 0, 0.2),
  0px 5px 8px 0px rgba(0, 0, 0, 0.14),
  0px 1px 14px 0px rgba(0, 0, 0, 0.12)`,
  '6': `0px 3px 5px -1px rgba(0, 0, 0, 0.2),
  0px 6px 10px 0px rgba(0, 0, 0, 0.14),
  0px 1px 18px 0px rgba(0, 0, 0, 0.12)`,
  '7': `0px 4px 5px -2px rgba(0, 0, 0, 0.2),
  0px 7px 10px 1px rgba(0, 0, 0, 0.14),
  0px 2px 16px 1px rgba(0, 0, 0, 0.12)`,
  '8': `0px 5px 5px -3px rgba(0, 0, 0, 0.2),
  0px 8px 10px 1px rgba(0, 0, 0, 0.14),
  0px 3px 14px 2px rgba(0, 0, 0, 0.12)`,
  '9': `0px 5px 6px -3px rgba(0, 0, 0, 0.2),
  0px 9px 12px 1px rgba(0, 0, 0, 0.14),
  0px 3px 16px 2px rgba(0, 0, 0, 0.12)`,
  '10': `0px 6px 6px -3px rgba(0, 0, 0, 0.2),
  0px 10px 14px 1px rgba(0, 0, 0, 0.14),
  0px 4px 18px 3px rgba(0, 0, 0, 0.12)`,
  '11': `0px 6px 7px -4px rgba(0, 0, 0, 0.2),
  0px 11px 15px 1px rgba(0, 0, 0, 0.14),
  0px 4px 20px 3px rgba(0, 0, 0, 0.12)`,
  '12': `0px 7px 8px -4px rgba(0, 0, 0, 0.2),
  0px 12px 17px 2px rgba(0, 0, 0, 0.14),
  0px 5px 22px 4px rgba(0, 0, 0, 0.12)`,
  '13': `0px 7px 8px -4px rgba(0, 0, 0, 0.2),
  0px 13px 19px 2px rgba(0, 0, 0, 0.14),
  0px 5px 24px 4px rgba(0, 0, 0, 0.12)`,
  '14': `0px 7px 9px -4px rgba(0, 0, 0, 0.2),
  0px 14px 21px 2px rgba(0, 0, 0, 0.14),
  0px 5px 26px 4px rgba(0, 0, 0, 0.12)`,
  '15': `0px 8px 9px -5px rgba(0, 0, 0, 0.2),
  0px 15px 22px 2px rgba(0, 0, 0, 0.14),
  0px 6px 28px 5px rgba(0, 0, 0, 0.12)`,
  '16': `0px 8px 10px -5px rgba(0, 0, 0, 0.2),
  0px 16px 24px 2px rgba(0, 0, 0, 0.14),
  0px 6px 30px 5px rgba(0, 0, 0, 0.12)`,
  '17': `0px 8px 11px -5px rgba(0, 0, 0, 0.2),
  0px 17px 26px 2px rgba(0, 0, 0, 0.14),
  0px 6px 32px 5px rgba(0, 0, 0, 0.12)`,
  '18': `0px 9px 11px -5px rgba(0, 0, 0, 0.2),
  0px 18px 28px 2px rgba(0, 0, 0, 0.14),
  0px 7px 34px 6px rgba(0, 0, 0, 0.12)`,
  '19': `0px 9px 12px -6px rgba(0, 0, 0, 0.2),
  0px 19px 29px 2px rgba(0, 0, 0, 0.14),
  0px 7px 36px 6px rgba(0, 0, 0, 0.12)`,
  '20': `0px 10px 13px -6px rgba(0, 0, 0, 0.2),
  0px 20px 31px 3px rgba(0, 0, 0, 0.14),
  0px 8px 38px 7px rgba(0, 0, 0, 0.12)`,
  '21': `0px 10px 13px -6px rgba(0, 0, 0, 0.2),
  0px 21px 33px 3px rgba(0, 0, 0, 0.14),
  0px 8px 40px 7px rgba(0, 0, 0, 0.12)`,
  '22': `0px 10px 14px -6px rgba(0, 0, 0, 0.2),
  0px 22px 35px 3px rgba(0, 0, 0, 0.14),
  0px 8px 42px 7px rgba(0, 0, 0, 0.12)`,
  '23': `0px 11px 14px -7px rgba(0, 0, 0, 0.2),
  0px 23px 36px 3px rgba(0, 0, 0, 0.14),
  0px 9px 44px 8px rgba(0, 0, 0, 0.12)`,
  '24': `0px 11px 15px -7px rgba(0, 0, 0, 0.2),
  0px 24px 38px 3px rgba(0, 0, 0, 0.14),
  0px 9px 46px 8px rgba(0, 0, 0, 0.12)`
};

const typographyTheme: TypographyTheme = {
  fontFamily: 'Lato, sans-serif',
  baseFontSize: '16px',
  body: {
    size: '1em',
    weight: '400',
    lineHeight: baseLineHeight,
    marginBottom: space.m
  },
  small: {
    size: '0.8em',
    weight: '400',
    lineHeight: baseLineHeight
  },
  leading: {
    size: '1.15em',
    weight: '400',
    lineHeight: baseLineHeight,
    marginBottom: space.s
  },
  headline: {
    size: '2em',
    weight: '300',
    lineHeight: baseLineHeight,
    marginBottom: space.l
  },
  subheading: {
    size: '1.3em',
    weight: '400',
    lineHeight: baseLineHeight,
    marginBottom: space.s
  },
  title: {
    size: '1.5em',
    weight: '300',
    lineHeight: baseLineHeight,
    marginBottom: space.m
  }
};

const accent: ColorTheme = {
  main: accentMain,
  darker: accentDarker,
  lighter: accentLighter,
  contrast: {
    main: accentMainContrast,
    darker: accentDarkerContrast,
    lighter: accentLighterContrast
  }
};

const primary: ColorTheme = {
  main: primaryMain,
  darker: primaryDarker,
  lighter: primaryLighter,
  contrast: {
    main: primaryMainContrast,
    darker: primaryDarkerContrast,
    lighter: primaryLighterContrast
  }
};

const elevation = {
  '0': elevationTheme['0'],
  '1': elevationTheme['6'],
  '2': elevationTheme['12'],
  '3': elevationTheme['18'],
  '4': elevationTheme['24']
};

export const staticTheme: NewThemeStatic = {
  queries,
  elevation,
  space,
  typography: typographyTheme
};

export const lightTheme: Theme = {
  dark: false,
  textColor: {
    text: darkText,
    primaryText: darkPrimaryText,
    accentText: darkAccentText,
    disabledText: darkDisabledText
  },
  background: {
    background: lightBackground,
    background0: lightBackground0,
    background5: lightBackground5,
    background10: lightBackground10,
    background20: lightBackground20,
    background30: lightBackground30
  },
  accent,
  primary
};

export const darkTheme: Theme = {
  dark: true,
  textColor: {
    text: lightText,
    primaryText: lightPrimaryText,
    accentText: lightAccentText,
    disabledText: lightDisabledText
  },
  background: {
    background: darkBackground,
    background0: darkBackground0,
    background5: darkBackground5,
    background10: darkBackground10,
    background20: darkBackground20,
    background30: darkBackground30
  },
  accent,
  primary
};
