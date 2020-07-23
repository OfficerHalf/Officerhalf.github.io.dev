import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Navigation/Header';
import { css, Global } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { EmotionTheme } from 'src/util/theme';

export const Layout: React.FC = props => {
  const { background } = useTheme<EmotionTheme>();
  const layoutGlobal = css`
    body {
      background-color: ${background.background5};
    }
  `;
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
