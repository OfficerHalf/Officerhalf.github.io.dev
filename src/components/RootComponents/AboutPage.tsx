/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';
import { Link } from '@reach/router';
import { routes } from '../../util/routes';
import { useImageModal } from '../../hooks/useImageModal';

const maxImageSize = '400px';

export const AboutPage: React.FC = props => {
  const { space } = React.useContext(ThemeContext);
  const imgRef = React.useRef<HTMLDivElement>();
  const modal = useImageModal(imgRef, maxImageSize);
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
        <a href="https://www.linkedin.com/in/nathan-r-smith/">LinkedIn</a>. Here's some{' '}
        <Link to={routes.uses}>things I use</Link>.
      </p>
      <p>Celty (the white & black girl) and Macready (the orange boy)</p>
      <div ref={imgRef}>
        <img alt="Celty" src="https://i.imgur.com/ihalSMu.jpg" />
        <img alt="Macready" src="https://i.imgur.com/hWbKoW6.jpg" />
      </div>
      {modal}
    </div>
  );
};

export default AboutPage;
