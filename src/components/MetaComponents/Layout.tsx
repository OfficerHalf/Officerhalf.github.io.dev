import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Navigation/Header';
import { css, Global } from '@emotion/core';
import theme from '../../util/theme';

const { color } = theme;

const layoutGlobal = css`
  body {
    background-color: ${color.background};
  }
`;

export const Layout: React.FC = props => {
  return (
    <div>
      <Helmet>
        <title>Nathan Smith</title>
      </Helmet>
      <Global styles={layoutGlobal} />
      <Header />
      {props.children}
    </div>
  );
};
