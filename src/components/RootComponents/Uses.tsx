/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ThemeContext } from '../../store/ThemeContext';
import { Body, Headline, Subheading } from '../Typography';

export const Uses: React.FC = props => {
  const { space } = React.useContext(ThemeContext);
  return (
    <div
      css={css`
        padding: ${space.m};
      `}>
      <Headline>Uses</Headline>
      <Body>
        Here's a bunch of things that I use in my day to day. If there's a dev channel or nightly build I usually have
        it, and also I'm a Microsoft fanboy don't @ me.
      </Body>
      <Subheading>Editor & Terminal</Subheading>
      <ul>
        <li>
          <a href="https://code.visualstudio.com/insiders/">Visual Studio Code Insiders</a> is my primary editor. I use
          the insiders build because I like the bleeding edge but mostly for the green icon.
        </li>
        <li>
          The only real way to write C# code is with{' '}
          <a href="https://visualstudio.microsoft.com/vs/">Visual Studio 2019</a>
        </li>
        <li>
          My color theme is <a href="https://www.nathan-smith.org/project/alloy/">Alloy</a>. I made it and use it in VS
          Code, my terminal, and even code blocks on this website.
        </li>
        <li>
          My terminal since it was released is <a href="https://github.com/Microsoft/Terminal">Windows Terminal</a>. I'm
          a Microsoft shill, what can I say.
        </li>
        <li>
          My font of choice was <a href="https://www.typography.com/fonts/operator/overview">Operator Mono</a> (I know,
          I know, both stereotypical and bougie), but in my terminal I use{' '}
          <a href="https://github.com/microsoft/cascadia-code">Cascadia Code</a>, and I'm slowly adopting it elsewhere.
          Cascadia is what you'll see in code blocks on this site!
        </li>
        <li>
          Even though I'm using Windows Terminal, I still include all the optimizations from{' '}
          <a href="https://cmder.net/">Cmder</a>. It's still indispensable in 2020 to make cmd a shell worth using.
        </li>
      </ul>
      <Subheading>Other Tools & Applications</Subheading>
      <ul>
        <li>
          My browser is <a href="https://www.microsoftedgeinsider.com/en-us/download">Edge Dev</a>. I wasn't lying about
          the Microsoft shill thing.
        </li>
        <li>
          For when you need to type ¯\_(ツ)_/¯ and don't want to search, there's{' '}
          <a href="https://beeftext.org/">BeefText</a>.
        </li>
        <li>
          <a href="https://github.com/microsoft/PowerToys">PowerToys</a>. I work on an ultrawide monitor, so FancyZones
          is necessary. PowerToys Run is mostly just re-branded Wox, but I use it from time to time as well. The
          system-wide color picker is great too.
        </li>
        <li>
          I've only recently started with <a href="https://www.notion.so/">Notion</a> for note taking and project
          planning, but it's blowing OneNote out of the water. Maybe there's hope I haven't sold my soul to Bill Gates
          yet.
        </li>
        <li>
          I'm slowly migrating to Notion, but <a href="https://www.onenote.com/">OneNote</a> has been my go-to for a
          long time to organize and plan. And I even use the UWP Windows 10 version 🤠.
        </li>
      </ul>
    </div>
  );
};

export default Uses;
