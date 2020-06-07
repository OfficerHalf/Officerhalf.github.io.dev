/** @jsx jsx */
import * as React from 'react';
import { ImageComparison } from '../Common/ImageComparison';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';

export const Alloy: React.FC = props => {
  return (
    <div
      css={css`
        justify-content: center;
        display: flex;
        text-align: center;
        margin-top: ${theme.space.l};
        margin-bottom: ${theme.space.l};
      `}>
      <div>
        <ImageComparison
          imageLeftSrc={`${process.env.PUBLIC_URL}/Alloy2.png`}
          imageRightSrc={`${process.env.PUBLIC_URL}/Monokai2.png`}
          width={1158}
          height={700}
          labelLeft="Alloy"
          labelRight="Monokai"
        />
        <h2
          css={css`
            margin-top: ${theme.space.l};
          `}>
          About
        </h2>
        <p>
          Alloy is my response to the green and yellow tinted world of Monokai.
          <br />
          Alloy has more contrast and clearer color, while maintaining Monokai's
          vibrant palette.
        </p>
        <p>
          Get the theme for{' '}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme"
            target="_blank"
            rel="noopener noreferrer">
            VS Code
          </a>
          ,{' '}
          <a
            href="https://github.com/OfficerHalf/alloy-theme-prismjs"
            target="_blank"
            rel="noopener noreferrer">
            prismjs
          </a>
          ,{' '}
          <a
            href="https://gist.github.com/OfficerHalf/15e58676b29dfde1a85a2945799e66b4"
            target="_blank"
            rel="noopener noreferrer">
            ConEmu
          </a>
          , and{' '}
          <a
            href="https://gist.github.com/OfficerHalf/6b0b0803b5788aeb185415285b2c34c3"
            target="_blank"
            rel="noopener noreferrer">
            Windows Terminal
          </a>
          .
          <br />
          <a
            css={css`
              display: inline-block;
              margin-top: ${theme.space.s};
            `}
            href="https://github.com/OfficerHalf/alloy-theme"
            target="_blank"
            rel="noopener noreferrer">
            See the source.
          </a>
        </p>
      </div>
    </div>
  );
};
