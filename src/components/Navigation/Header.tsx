/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { Link, useNavigate } from 'react-router-dom';
import { Title } from '../Typography';
import { Dropdown } from '../Common/Dropdown';
import { routes } from '../../util/routes';

const { color, space } = theme;

const headerStyles = css`
  background-color: ${color.primary};
  color: white;
  padding: ${space.m};
`;

const listStyle = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  & > li {
    display: block;
    margin: 0 ${space.sm};
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }

    &.spacer {
      cursor: initial;
      flex-grow: 1;
    }
    a {
      text-decoration: none;
      &,
      &:active,
      &:hover,
      &:visited {
        color: white;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Header: React.FC = props => {
  const navigate = useNavigate();

  return (
    <header css={headerStyles}>
      <ul css={listStyle}>
        <li>
          <Link to="/">
            <Title>Nathan Smith</Title>
          </Link>
        </li>
        <li className="spacer" />
        <li>
          <Dropdown
            options={[
              {
                text: 'Alloy',
                onClick: () => navigate(routes.project.alloy.link)
              },
              {
                text: 'Homebrewery Markdown Preview',
                onClick: () => navigate(routes.project.homebrewery.link)
              }
            ]}
            arrow>
            <Title>Projects</Title>
          </Dropdown>
        </li>
        <li>
          <Link to={routes.about}>
            <Title>About</Title>
          </Link>
        </li>
        <li>
          <Link to={routes.contact}>
            <Title>Contact</Title>
          </Link>
        </li>
      </ul>
    </header>
  );
};
