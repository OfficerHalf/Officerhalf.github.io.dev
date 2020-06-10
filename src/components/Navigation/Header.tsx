/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../Common/Dropdown';
import { routes } from '../../util/routes';

const { color, space, typography } = theme;

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

const navLinkStyle = css`
  font-size: ${typography.title.size};
  font-weight: ${typography.title.weight};
`;

export const Header: React.FC = props => {
  const navigate = useNavigate();

  return (
    <header css={headerStyles}>
      <ul css={listStyle}>
        <li>
          <Link to="/">
            <span css={navLinkStyle}>Nathan Smith</span>
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
            <span css={navLinkStyle}>Projects</span>
          </Dropdown>
        </li>
        <li>
          <Link to={routes.about}>
            <span css={navLinkStyle}>About</span>
          </Link>
        </li>
        <li>
          <Link to={routes.contact}>
            <span css={navLinkStyle}>Contact</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};
