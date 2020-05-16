import React from 'react';
import { Global, css } from '@emotion/core';
import { HomePage } from '../RootComponents/HomePage';
import { AboutPage } from '../RootComponents/AboutPage';
import { theme } from '../../util/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

const { color, typography } = theme;
const globalStyles = css`
  html {
    color: ${color.text};
    font-family: ${typography.bodyFontFamily};
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: ${typography.headerFontFamily};
    }
  }
`;

export const App: React.FC = props => {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
