interface GoogleFont {
  name: string;
  styles: string[];
}

interface Font {
  size: string;
  weight: string;
  lineHeight: number;
}

export interface Theme {
  color: {
    primary: string;
    accent: string;
    text: string;
    mutedText: string;
    lightGray: string;
    background: string;
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
    fontFamily: string;
    small: Font;
    body: Font;
    headline: Font;
    leading: Font;
    subheading: Font;
    title: Font;
    googleFonts: GoogleFont[];
  };
}
