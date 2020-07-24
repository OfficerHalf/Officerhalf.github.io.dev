interface GoogleFont {
  name: string;
  styles: string[];
}

interface Font {
  size: string;
  weight: string;
  lineHeight: number;
  marginBottom?: string;
}

interface ElevationTheme {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
}

export interface ColorTheme {
  main: string;
  lighter: string;
  darker: string;
  contrast: {
    main: string;
    lighter: string;
    darker: string;
  };
}

interface SpaceTheme {
  xxs: string;
  xs: string;
  s: string;
  sm: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

export interface TypographyTheme {
  baseFontSize: string;
  fontFamily: string;
  small: Font;
  body: Font;
  headline: Font;
  leading: Font;
  subheading: Font;
  title: Font;
}

interface MediaQueryTheme {
  '5': string;
  '7': string;
  '9': string;
  '12': string;
}

export interface TextColorTheme {
  text: string;
  primaryText: string;
  accentText: string;
  disabledText: string;
}

export interface NewThemeStatic {
  elevation: ElevationTheme;
  space: SpaceTheme;
  typography: TypographyTheme;
  queries: MediaQueryTheme;
}

export interface Theme {
  dark: boolean;
  textColor: TextColorTheme;
  background: {
    background: string;
    background0: string;
    background5: string;
    background10: string;
    background20: string;
    background30: string;
  };
  primary: ColorTheme;
  accent: ColorTheme;
}
