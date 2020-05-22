/** @jsx jsx */
import React from 'react';
import { BlogPost } from '../../types/cms';
import { Link } from 'react-router-dom';
import { parsePostDate } from '../../util/cms';
import { jsx, css } from '@emotion/core';
import theme from '../../util/theme';
import { routes } from '../../util/routes';

const { space, color } = theme;

const postCardStyle = css`
  max-width: 700px;
  margin: ${space.m};
  background-color: white;
  .title {
    display: block;
    margin: 0;
    padding: ${space.xs};
    background-color: ${color.primary};
    text-decoration: none;
    &,
    &:focus,
    &:visited,
    &:active {
      color: white;
    }
  }
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

interface PostListProps {
  posts: BlogPost[];
}

export const PostList: React.FC<PostListProps> = props => {
  const { posts } = props;
  return (
    <div>
      {posts.map(p => (
        <div key={p.slug} css={postCardStyle}>
          <Link className="title" to={routes.blog.post.link(p.slug)}>
            {p.title}
          </Link>
          <div>
            <span>{parsePostDate(p.published)}</span>
            <span>
              {p.categories.map(c => (
                <Link key={c.slug} to={routes.blog.category.link(c.slug)}>
                  {c.name}
                </Link>
              ))}
            </span>
          </div>
          <div css={postFeatureStyle}>
            {p.featured_image && p.featured_image !== '' && (
              <img alt="featured" src={p.featured_image} />
            )}
            <div>{p.summary}</div>
          </div>
          <div>
            {p.tags.map(t => (
              <Link key={t.slug} to={routes.blog.tag.link(t.slug)}>
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
