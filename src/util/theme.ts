import { Theme } from '../types/theme';

const baseLineHeight = 1.61;

export const theme: Theme = {
  color: {
    primary: '#377771',
    accent: '#4CE0B3',
    text: '#333',
    mutedText: '#707070',
    background: '#e7ecef'
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
    fontFamily: 'Lato, sans-serif',
    baseFontSize: '18px',
    body: {
      size: '1em',
      weight: '400',
      lineHeight: baseLineHeight
    },
    small: {
      size: '0.857em',
      weight: '400',
      lineHeight: baseLineHeight
    },
    leading: {
      size: '1.143em',
      weight: '400',
      lineHeight: baseLineHeight
    },
    headline: {
      size: '2.286em',
      weight: '300',
      lineHeight: baseLineHeight * 2
    },
    subheading: {
      size: '1.286em',
      weight: '400',
      lineHeight: baseLineHeight * 1.5
    },
    title: {
      size: '1.714em',
      weight: '300',
      lineHeight: baseLineHeight * 1.5
    },
    googleFonts: [
      {
        name: 'Lato',
        styles: ['300', '400', '700']
      }
    ]
  }
};

// baseFontSize: '18px',
//     headerFontFamily: 'Lato, sans-serif',
//     bodyFontFamily: 'Lato, sans-serif',

export default theme;
