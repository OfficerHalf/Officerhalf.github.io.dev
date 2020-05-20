/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const contactStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 800px;

  iframe {
    border: 0;
    width: 550px;
    height: 800px;
  }
`;

export const ContactPage: React.FC = props => {
  return (
    <div css={contactStyle}>
      <iframe
        title="Contact Me"
        src="https://docs.google.com/forms/d/e/1FAIpQLScLKJVojwvtY0TpBPYfaUQEhKjQfa2iAZsitp3iRxkEoAYvmw/viewform?embedded=true"
      />
    </div>
  );
};
