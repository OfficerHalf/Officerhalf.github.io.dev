/** @jsx jsx */
import React from 'react';
import { BlogPost } from '../../types/cms';
import { Link } from 'react-router-dom';
import { parsePostDate } from '../../util/cms';
import { jsx, css } from '@emotion/core';
import theme from '../../util/theme';
import { routes } from '../../util/routes';
import { Body, Small, Subheading } from '../Typography';

const { space, color } = theme;

const postCardStyle = css`
  max-width: 700px;
  margin: ${space.m};
  background-color: white;
`;

const postFeatureStyle = css`
  display: flex;
  align-items: center;
  img {
    max-width: 200px;
    max-height: 150px;
    margin-right: ${space.s};
  }
`;

const titleStyle = css`
  display: block;
  margin: 0;
  text-decoration: none;
  &,
  &:focus,
  &:visited,
  &:active {
    color: ${color.primary};
  }
`;

const dateStyle = css`
  margin-bottom: ${space.sm};
`;

interface PostListProps {
  posts: BlogPost[];
}

export const PostList: React.FC<PostListProps> = props => {
  const { posts } = props;
  return (
    <div>
      {posts.map(p => {
        const category =
          p.categories && p.categories.length > 0 ? p.categories[0] : null;
        return (
          <div key={p.slug} css={postCardStyle}>
            <Link css={titleStyle} to={routes.blog.post.link(p.slug)}>
              <Subheading>{p.title}</Subheading>
            </Link>
            <div
              css={css`
                display: flex;
              `}>
              <Small css={dateStyle}>{parsePostDate(p.published)}</Small>
              {category && (
                <React.Fragment>
                  <Small>&mdash;</Small>
                  <Link to={routes.blog.category.link(category.slug)}>
                    <Small>{category.name}</Small>
                  </Link>
                </React.Fragment>
              )}
            </div>
            <div css={postFeatureStyle}>
              {p.featured_image && p.featured_image !== '' && (
                <img alt="featured" src={p.featured_image} />
              )}
              <Body>{p.summary}</Body>
            </div>
            <div
              css={css`
                display: flex;
              `}>
              {p.tags.map(t => (
                <Link key={t.slug} to={routes.blog.tag.link(t.slug)}>
                  <Small>{t.name}</Small>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
