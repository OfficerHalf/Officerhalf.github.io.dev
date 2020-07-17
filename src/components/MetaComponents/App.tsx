import React from 'react';
import { Global, css } from '@emotion/core';
import { theme } from '../../util/theme';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Layout } from './Layout';
import { HelmetProvider } from 'react-helmet-async';
import '../../normalize.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic']);

const { color, typography, space } = theme;
const globalStyles = css`
  html {
    box-sizing: border-box;
    color: ${color.text};
    font-family: ${typography.fontFamily};
    font-size: ${typography.baseFontSize};
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    .muted {
      color: ${color.mutedText};
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
  p {
    font-size: ${typography.body.size};
    font-weight: ${typography.body.weight};
    line-height: ${typography.body.lineHeight};
    margin-bottom: ${typography.body.marginBottom!};
    code {
      background-color: ${color.accent}15;
      padding-left: ${space.xs};
      padding-right: ${space.xs};
      border-radius: ${space.s};
    }
  }

  ol > li,
  ul > li {
    margin-bottom: ${space.s};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const App: React.FC = props => {
  return (
    <Root>
      <HelmetProvider>
        <Global styles={globalStyles} />
        <Layout>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </Layout>
      </HelmetProvider>
    </Root>
  );
};
