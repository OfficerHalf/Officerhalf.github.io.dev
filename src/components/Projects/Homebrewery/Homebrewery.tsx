/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import './previewSpecific.css';
import './phb.css';
import { useMedia } from 'react-media';
import { staticTheme } from '../../../util/theme';

const { space, queries } = staticTheme;

export const Homebrewery: React.FC = props => {
  const breakpoints = useMedia({ queries });

  return (
    <div
      css={css`
        background-color: white;
        min-height: calc(100vh - 56px);
        display: flex;
        justify-content: center;
        padding: ${breakpoints[7] ? space.xxl : breakpoints[9] ? space.xxxl : 0};
      `}>
      <div
        className="phb"
        id="p1"
        style={{
          marginBottom: 'auto',
          height: 'auto',
          alignSelf: 'center'
        }}>
        <h1 id="homebrewery-markdown-preview-1" data-line="0" className="code-line">
          Homebrewery Markdown Preview
        </h1>
        <p data-line="2" className="code-line">
          Greetings friend! Pull up a chair and listen to my tale; it is a story of a GM with grand ideas, but
          frustrated with an online Markdown editor that isn't quite up to par. He channeled his angst into his own
          little helper, a Visual Studio Code extension to solve his woes.
        </p>
        <h3 id="homebrew-dd-1" data-line="4" className="code-line">
          Homebrew D&amp;D
        </h3>
        <p data-line="6" className="code-line">
          The <a href="https://homebrewery.naturalcrit.com/">Homebrewery</a> is a wonderful online tool for creating
          homebrew D&amp;D content that looks like it came straight out of the Player's Handbook. With markdown and a
          little CSS magic, it turns bland text into readable, flavorful homebrew content. How else are you going to
          share your custom anime protagonist background or your homemade lightsaber weapon stat block?
        </p>
        <h3 id="the-problem--the-solution-1" data-line="8" className="code-line">
          The Problem &amp; The Solution
        </h3>
        <p data-line="10" className="code-line">
          However, the Homebrewery's online editor leaves something to be desired. Bare syntax highlighting combined
          with minimal tooling can be a frustrating experience.
        </p>
        <p data-line="12" className="code-line">
          My solution was to create an extension for Visual Studio Code that would allow me to do my homebrew editing
          there in a much more powerful application.
        </p>
        <blockquote data-line="17" className="code-line" style={{ marginTop: 5 }}>
          <h5 id="did-you-know-1" data-line="17" className="code-line">
            Did You Know
          </h5>
          <p data-line="18" className="code-line">
            This extension includes a number of snippets for creating descriptions, statblocks, and notes just like this
            one? Wow! What a great value!
          </p>
        </blockquote>
        <h2 id="what-it-does-1" data-line="23" className="code-line">
          What it does
        </h2>
        <p data-line="24" className="code-line">
          The extension shows your homebrew content as you type in VS Code's markdown preview window. Toggling the
          homebrew styling on/off is easy with a command from the command palette.
        </p>
        <h2 id="where-to-get-it-1" data-line="26" className="code-line">
          Where to get it
        </h2>
        <p data-line="27" className="code-line">
          The extension can be found in the extensions pane of Visual Studio Code or{' '}
          <a href="https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode">here</a>
          .
          <br />
          <br />
          The source is available <a href="https://github.com/OfficerHalf/homebrewery-vscode">here</a>.
        </p>
      </div>
    </div>
  );
};

export default Homebrewery;
