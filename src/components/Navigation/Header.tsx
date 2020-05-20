/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { Link } from 'react-router-dom';

const { color, space } = theme;

const headerStyles = css`
  background-color: ${color.primary};
  color: white;
  padding: ${space.m};
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
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
  }
`;

export const Header: React.FC = props => {
  return (
    <header css={headerStyles}>
      <ul>
        <li>
          <Link to="/">Nathan Smith</Link>
        </li>
        <li className="spacer" />
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};
