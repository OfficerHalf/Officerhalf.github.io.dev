import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Navigation/Header';
import { css, Global } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';

export const Layout: React.FC = props => {
  const { textColor, background, primary, space, typography, dark } = React.useContext(ThemeContext);
  const globalStyles = css`
    html {
      box-sizing: border-box;
      color: ${textColor.primaryText};
      font-family: ${typography.fontFamily};
      font-size: ${typography.baseFontSize};
      background-color: ${background.background5};
    }
    h1,
    h2,
    h3,
    h4,
    p {
      margin: 0;
      .muted {
        color: ${textColor.accentText};
      }
    }

    /* Headline */
    h1 {
      font-size: ${typography.headline.size};
      font-weight: ${typography.headline.weight};
      line-height: ${typography.headline.lineHeight};
    }
    /* Title */
    h2 {
      font-size: ${typography.title.size};
      font-weight: ${typography.title.weight};
      line-height: ${typography.title.lineHeight};
    }
    /* Subheading */
    h3 {
      font-size: ${typography.subheading.size};
      font-weight: ${typography.subheading.weight};
      line-height: ${typography.subheading.lineHeight};
      margin-bottom: ${typography.subheading.marginBottom!};
    }
    /* Lead text */
    h4 {
      font-size: ${typography.leading.size};
      font-weight: ${typography.leading.weight};
      line-height: ${typography.leading.lineHeight};
      margin-bottom: ${typography.leading.marginBottom!};
    }
    /* Body Text */
    p {
      font-size: ${typography.body.size};
      font-weight: ${typography.body.weight};
      line-height: ${typography.body.lineHeight};
      margin-bottom: ${typography.body.marginBottom!};
      code {
        background-color: ${background.background10};
        padding-left: ${space.xs};
        padding-right: ${space.xs};
        border-radius: ${space.s};
      }
    }

    a {
      text-decoration: none;
      color: ${dark ? primary.lighter : primary.main};
      &:hover,
      &:active {
        text-decoration: underline;
      }
    }

    ol > li,
    ul > li {
      margin-bottom: ${space.s};
      line-height: ${typography.body.lineHeight};
    }

    hr {
      border-color: ${background.background30};
      border-style: solid;
      background-color: ${background.background30};
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  `;

  return (
    <div>
      <Helmet>
        <title>Nathan Smith</title>
      </Helmet>
      <Global styles={globalStyles} />
      <Header />
      {props.children}
    </div>
  );
};
