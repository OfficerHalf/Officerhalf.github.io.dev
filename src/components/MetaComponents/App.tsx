import React from 'react';
import { Global, css } from '@emotion/core';
import { HomePage } from '../RootComponents/HomePage';
import { AboutPage } from '../RootComponents/AboutPage';
import { theme } from '../../util/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { ContactPage } from '../RootComponents/ContactPage';
import { Post } from '../Blog/Post';
import { routes } from '../../util/routes';
import { Category } from '../Blog/Category';
import { Tag } from '../Blog/Tag';
import { Alloy } from '../Projects/Alloy';
import { Homebrewery } from '../Projects/Homebrewery/Homebrewery';

const { color, typography } = theme;
const globalStyles = css`
  html {
    box-sizing: border-box;
    color: ${color.text};
    font-family: ${typography.fontFamily};
    font-size: ${typography.baseFontSize};
  }
  /* Headline */
  h1 {
    font-size: ${typography.headline.size};
    font-weight: ${typography.headline.weight};
  }
  /* Title */
  h2 {
    font-size: ${typography.title.size};
    font-weight: ${typography.title.weight};
  }
  /* Subheading */
  h3 {
    font-size: ${typography.subheading.size};
    font-weight: ${typography.subheading.weight};
  }
  /* Lead text */
  h4 {
    font-size: ${typography.leading.size};
    font-weight: ${typography.leading.weight};
  }
  p {
    font-size: ${typography.body.size};
    font-weight: ${typography.body.weight};
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    .muted {
      color: ${color.mutedText};
    }
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const App: React.FC = props => {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path={routes.about} element={<AboutPage />} />
            <Route path={routes.contact} element={<ContactPage />} />
            <Route path={routes.blog.base}>
              <Route path={routes.blog.post.template} element={<Post />} />
              <Route
                path={routes.blog.category.template}
                element={<Category />}
              />
              <Route path={routes.blog.tag.template} element={<Tag />} />
            </Route>
            <Route path={routes.project.base}>
              <Route path={routes.project.alloy.base} element={<Alloy />} />
              <Route
                path={routes.project.homebrewery.base}
                element={<Homebrewery />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
