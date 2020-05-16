interface GoogleFont {
  name: string;
  styles: string[];
}

export interface Theme {
  color: {
    primary: string;
    accent: string;
    text: string;
  };
  space: {
    xxs: string;
    xs: string;
    s: string;
    sm: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  typography: {
    baseFontSize: string;
    baseLineHeight: number;
    headerFontFamily: string;
    bodyFontFamily: string;
    googleFonts: GoogleFont[];
  };
}
