/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../util/routes';
import { Menu } from '../Icons';
import { Drawer } from './Drawer';
import { MenuItem } from '../../types/nav';
import { useMedia } from 'react-media';
import { Horizontal } from './Horizontal';

const { color, space, typography, queries } = theme;

const headerStyles = css`
  background-color: ${color.primary};
  color: white;
  padding: ${space.m};
  display: flex;
  align-items: center;
  .spacer {
    cursor: initial;
    flex-grow: 1;
  }
`;

const navLinkStyle = css`
  font-size: ${typography.title.size};
  font-weight: ${typography.title.weight};
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
`;

const menuStyle = css`
  width: ${space.l};
  height: ${space.l};
  fill: white;
  cursor: pointer;
`;

export const Header: React.FC = props => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const breakpoints = useMedia({ queries });

  React.useEffect(() => {
    if (breakpoints[7]) {
      setDrawerOpen(false);
    }
  }, [breakpoints]);

  const menuItems: MenuItem[] = React.useMemo(
    () => [
      {
        text: 'Projects',
        childItems: [
          { text: 'Alloy', onClick: () => navigate(routes.project.alloy.link) },
          {
            text: 'Homebrewery Markdown Preview',
            onClick: () => navigate(routes.project.homebrewery.link)
          }
        ]
      },
      {
        text: 'About',
        to: routes.about
      },
      {
        text: 'Contact',
        to: routes.contact
      }
    ],
    [navigate]
  );

  return (
    <header css={headerStyles}>
      <Link css={navLinkStyle} to="/">
        <span>Nathan Smith</span>
      </Link>
      <div className="spacer" />
      {!breakpoints[5] && <Menu css={menuStyle} onClick={() => setDrawerOpen(true)} />}
      {!breakpoints[5] && <Drawer open={drawerOpen} items={menuItems} onClose={() => setDrawerOpen(false)} />}
      {breakpoints[5] && <Horizontal items={menuItems} />}
      {/* <ul css={listStyle}>
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
      </ul> */}
    </header>
  );
};
