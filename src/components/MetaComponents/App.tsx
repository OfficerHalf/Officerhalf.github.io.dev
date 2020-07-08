import React from 'react';
import { Global, css } from '@emotion/core';
import { HomePage } from '../RootComponents/HomePage';
import { AboutPage } from '../RootComponents/AboutPage/AboutPage';
import { theme } from '../../util/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { ContactPage } from '../RootComponents/ContactPage';
import { Post } from '../Blog/Post';
import { routes } from '../../util/routes';
import { Category } from '../Blog/Category';
import { Tag } from '../Blog/Tag';
import { Alloy } from '../Projects/Alloy/Alloy';
import { Homebrewery } from '../Projects/Homebrewery/Homebrewery';
import { Search } from '../Blog/Search';
import { HelmetProvider } from 'react-helmet-async';

const { color, typography, space } = theme;
const globalStyles = css`
  html {
    box-sizing: border-box;
    color: ${color.text};
    font-family: ${typography.fontFamily};
    font-size: ${typography.baseFontSize};
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

  /* Headline */
  h1 {
    font-size: ${typography.headline.size};
    font-weight: ${typography.headline.weight};
    line-height: ${typography.headline.lineHeight};
  }
  /* Title */
  h2 {
    font-size: ${typography.title.size};
    font-weight: ${typography.title.weight};
    line-height: ${typography.title.lineHeight};
  }
  /* Subheading */
  h3 {
    font-size: ${typography.subheading.size};
    font-weight: ${typography.subheading.weight};
    line-height: ${typography.subheading.lineHeight};
    margin-bottom: ${typography.subheading.marginBottom!};
  }
  /* Lead text */
  h4 {
    font-size: ${typography.leading.size};
    font-weight: ${typography.leading.weight};
    line-height: ${typography.leading.lineHeight};
    margin-bottom: ${typography.leading.marginBottom!};
  }
  p {
    font-size: ${typography.body.size};
    font-weight: ${typography.body.weight};
    line-height: ${typography.body.lineHeight};
    margin-bottom: ${typography.body.marginBottom!};
  }

  ol > li,
  ul > li {
    margin-bottom: ${space.s};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export const App: React.FC = props => {
  return (
    <HelmetProvider>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path={routes.about} element={<AboutPage />} />
            <Route path={routes.contact} element={<ContactPage />} />
            <Route path={routes.blog.base}>
              <Route path={routes.blog.post.template} element={<Post />} />
              <Route path={routes.blog.category.template} element={<Category />} />
              <Route path={routes.blog.tag.template} element={<Tag />} />
              <Route path={routes.blog.search.template} element={<Search />} />
            </Route>
            <Route path={routes.project.base}>
              <Route path={routes.project.alloy.base} element={<Alloy />} />
              <Route path={routes.project.homebrewery.base} element={<Homebrewery />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};
