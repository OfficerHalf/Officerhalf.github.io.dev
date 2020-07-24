/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { staticTheme } from '../../../util/theme';

const { space } = staticTheme;

const maxImageSize = '400px';

export const AboutPage: React.FC = props => {
  return (
    <div
      css={css`
        padding: ${space.m};
      `}>
      <p>
        Nathan Smith is an Associate Software Developer at Bentley Systems where he writes full-stack enterprise ASP.NET
        Core and TypeScript + React web applications and maintains a CSS + React UI library. In his spare time he plays
        tabletop and video games and takes pictures of his cats.
      </p>
      <p>
        Find me on <a href="https://github.com/OfficerHalf">GitHub</a> and{' '}
        <a href="https://www.linkedin.com/in/nathan-r-smith/">LinkedIn</a>.
      </p>
      <p>Celty (the white & black girl) and Macready (the orange boy)</p>
      <div>
        <img
          css={css`
            max-width: ${maxImageSize};
          `}
          alt="Celty"
          src="/Celty.jpg"
        />
        <img
          css={css`
            max-width: ${maxImageSize};
          `}
          alt="Macready"
          src="/Macready.jpg"
        />
      </div>
    </div>
  );
};

export default AboutPage;
