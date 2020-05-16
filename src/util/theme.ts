import { Theme } from '../types/theme';

export const theme: Theme = {
  color: {
    primary: '#377771',
    accent: '#4CE0B3',
    text: '#333'
  },
  space: {
    xxs: '2px',
    xs: '4px',
    s: '8px',
    sm: '12px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '64px',
    xxxl: '96px'
  },
  typography: {
    baseFontSize: '18px',
    baseLineHeight: 1.61,
    headerFontFamily: 'Lato, sans-serif',
    bodyFontFamily: 'Lato, sans-serif',
    googleFonts: [
      {
        name: 'Lato',
        styles: ['400', '700']
      }
    ]
  }
};

export default theme;
